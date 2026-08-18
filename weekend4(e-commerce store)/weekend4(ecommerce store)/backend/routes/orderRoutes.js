const sequelize = require("../config/database");

const {
  Order,
  OrderItem,
  Cart,
  Product,
  Category,
  Coupon
} = require("../models");

const { authenticate } = require("../middleware/auth");

const {
  processPayment
} = require("../services/paymentService");

const {
  sendOrderConfirmation
} = require("../services/emailService");




const productInclude = {
  model: Product,
  as: "product",
  include: [
    {
      model: Category,
      as: "category",
      attributes: ["id", "name"]
    }
  ]
};



module.exports = async function orderRoutes(fastify) {


  fastify.post(
    "/",
    {
      preHandler: authenticate
    },

    async (request, reply) => {

      const {
        shippingName,
        shippingAddress,
        shippingPhone,
        couponCode,
        paymentMethod = "mock"
      } = request.body || {};


     
      if (
        !shippingName?.trim() ||
        !shippingAddress?.trim() ||
        !shippingPhone?.trim()
      ) {

        return reply.code(400).send({
          message:
            "Shipping name, address and phone are required"
        });

      }



      const transaction =
        await sequelize.transaction();


      try {

        const cartItems =
          await Cart.findAll({

            where: {
              userId: request.user.id
            },

            include: [
              productInclude
            ],

            transaction

          });


        if (!cartItems.length) {

          await transaction.rollback();

          return reply.code(400).send({
            message: "Your cart is empty"
          });

        }



        let subtotal = 0;

        const lockedProducts = [];


        for (const item of cartItems) {


          const product =
            await Product.findByPk(
              item.productId,
              {
                transaction,

                lock:
                  transaction.LOCK.UPDATE
              }
            );

          if (!product) {

            throw new Error(
              `Product ${item.productId} no longer exists`
            );

          }


          if (
            Number(item.quantity) >
            Number(product.stock)
          ) {

            throw new Error(
              `Insufficient stock for ${product.name}`
            );

          }

          subtotal +=
            Number(product.price) *
            Number(item.quantity);


          lockedProducts.push({
            item,
            product
          });

        }


        let discount = 0;

        let coupon = null;


        if (couponCode?.trim()) {


          coupon =
            await Coupon.findOne({

              where: {
                code:
                  couponCode
                    .trim()
                    .toUpperCase(),

                isActive: true
              },

              transaction,

 
              lock:
                transaction.LOCK.UPDATE
            });


          if (!coupon) {

            throw new Error(
              "Invalid or inactive coupon"
            );

          }


          if (
            coupon.expiresAt &&
            new Date(coupon.expiresAt) <
              new Date()
          ) {

            throw new Error(
              "Coupon has expired"
            );

          }


          if (
            subtotal <
            Number(coupon.minimumAmount)
          ) {

            throw new Error(
              `Minimum order amount for this coupon is ₹${Number(
                coupon.minimumAmount
              ).toLocaleString("en-IN")}`
            );

          }

          if (
            coupon.discountType ===
            "percentage"
          ) {

            discount =
              subtotal *
              Number(
                coupon.discountValue
              ) /
              100;

          } else {

            discount =
              Number(
                coupon.discountValue
              );

          }


          discount =
            Math.min(
              discount,
              subtotal
            );

        }

        const total =
          Math.max(
            0,
            subtotal - discount
          );

        const payment =
          await processPayment({

            amount: total,

            method:
              paymentMethod

          });

        if (
          !payment ||
          !payment.success
        ) {

          throw new Error(
            payment?.message ||
            "Payment failed"
          );

        }

        const order =
          await Order.create(

            {

              userId:
                request.user.id,

              totalAmount:
                total,

              discountAmount:
                discount,

              couponCode:
                coupon?.code ||
                null,

              status:
                "confirmed",

              paymentStatus:
                "paid",

              paymentMethod:
                payment.method ||
                paymentMethod,

              shippingName:
                shippingName.trim(),

              shippingAddress:
                shippingAddress.trim(),

              shippingPhone:
                shippingPhone.trim()

            },

            {
              transaction
            }

          );

        for (
          const {
            item,
            product
          } of lockedProducts
        ) {


          await OrderItem.create(

            {

              orderId:
                order.id,

              productId:
                product.id,

              quantity:
                item.quantity,

              unitPrice:
                product.price

            },

            {
              transaction
            }

          );


          await product.update(

            {

              stock:
                Number(product.stock) -
                Number(item.quantity)

            },

            {
              transaction
            }

          );

        }


        await Cart.destroy({

          where: {
            userId:
              request.user.id
          },

          transaction

        });


        await transaction.commit();


        try {

          await sendOrderConfirmation({

            to:
              request.user.email,

            name:
              request.user.name,

            order

          });

        } catch (emailError) {

          fastify.log.error(
            emailError
          );

        }



        return reply.code(201).send({

          message:
            "Order placed successfully",

          order: {

            id:
              order.id,

            totalAmount:
              order.totalAmount,

            discountAmount:
              order.discountAmount,

            status:
              order.status,

            paymentStatus:
              order.paymentStatus

          }

        });


      } catch (error) {

        if (
          !transaction.finished
        ) {

          await transaction.rollback();

        }

        fastify.log.error(
          error
        );


        return reply.code(400).send({

          message:
            error.message ||
            "Checkout failed. Transaction rolled back."

        });

      }

    }
  );


  fastify.get(
    "/",
    {
      preHandler: authenticate
    },

    async (request) => {

      const orders =
        await Order.findAll({

          where: {
            userId:
              request.user.id
          },

          include: [

            {
              model: OrderItem,

              as: "items",

              include: [
                productInclude
              ]

            }

          ],

          order: [
            [
              "createdAt",
              "DESC"
            ]
          ]

        });


      return {
        orders
      };

    }
  );

  fastify.get(
    "/:id",
    {
      preHandler: authenticate
    },

    async (
      request,
      reply
    ) => {

      const order =
        await Order.findOne({

          where: {

            id:
              request.params.id,

            userId:
              request.user.id

          },

          include: [

            {
              model: OrderItem,

              as: "items",

              include: [
                productInclude
              ]

            }

          ]

        });


      if (!order) {

        return reply.code(404).send({

          message:
            "Order not found"

        });

      }


      return {
        order
      };

    }
  );

};