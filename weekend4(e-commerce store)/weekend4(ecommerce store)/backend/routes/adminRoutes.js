const { Order, OrderItem, Product, Category, User } = require("../models");
const { authenticate, requireAdmin } = require("../middleware/auth");

module.exports = async function adminRoutes(fastify) {
  const admin = { preHandler: [authenticate, requireAdmin] };

  fastify.get("/orders", admin, async () => {
    const orders = await Order.findAll({
      include: [
        { model: User, as: "user", attributes: ["id", "name", "email"] },
        { model: OrderItem, as: "items", include: [{ model: Product, as: "product" }] }
      ],
      order: [["createdAt", "DESC"]]
    });
    return { orders };
  });

  fastify.put("/orders/:id/status", admin, async (request, reply) => {
    const { status } = request.body || {};
    const allowed = ["pending", "confirmed", "processing", "shipped", "delivered", "cancelled"];
    if (!allowed.includes(status)) return reply.code(400).send({ message: "Invalid order status" });
    const order = await Order.findByPk(request.params.id);
    if (!order) return reply.code(404).send({ message: "Order not found" });
    await order.update({ status });
    return { order };
  });

  fastify.get("/products", admin, async () => ({
    products: await Product.findAll({ include: [{ model: Category, as: "category" }], order: [["id", "DESC"]] })
  }));

  fastify.get("/users", admin, async () => ({
    users: await User.findAll({ attributes: ["id", "name", "email", "role", "createdAt"], order: [["id", "DESC"]] })
  }));
};
