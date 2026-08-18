const { Cart, Product, Category } = require("../models");
const { authenticate } = require("../middleware/auth");

const productInclude = { model: Product, as: "product", include: [{ model: Category, as: "category", attributes: ["id", "name"] }] };

module.exports = async function cartRoutes(fastify) {
  fastify.get("/", { preHandler: authenticate }, async (request) => {
    const items = await Cart.findAll({ where: { userId: request.user.id }, include: [productInclude], order: [["id", "ASC"]] });
    const total = items.reduce((sum, item) => sum + Number(item.product.price) * item.quantity, 0);
    return { cart: items, total };
  });

  fastify.post("/", { preHandler: authenticate }, async (request, reply) => {
    try {
      const { productId, quantity = 1 } = request.body || {};
      const qty = Number(quantity);
      const product = await Product.findByPk(productId);
      if (!product) return reply.code(404).send({ message: "Product not found" });
      if (!Number.isInteger(qty) || qty <= 0) return reply.code(400).send({ message: "Quantity must be a positive integer" });

      const existing = await Cart.findOne({ where: { userId: request.user.id, productId } });
      const newQty = (existing?.quantity || 0) + qty;
      if (newQty > product.stock) return reply.code(400).send({ message: `Only ${product.stock} item(s) available` });

      if (existing) await existing.update({ quantity: newQty });
      else await Cart.create({ userId: request.user.id, productId, quantity: qty });

      const item = await Cart.findOne({ where: { userId: request.user.id, productId }, include: [productInclude] });
      return reply.code(201).send({ message: "Cart updated", cart: item });
    } catch (error) {
      fastify.log.error(error);
      return reply.code(500).send({ message: "Failed to update cart" });
    }
  });

  fastify.put("/:id", { preHandler: authenticate }, async (request, reply) => {
    const item = await Cart.findOne({ where: { id: request.params.id, userId: request.user.id }, include: [productInclude] });
    if (!item) return reply.code(404).send({ message: "Cart item not found" });
    const quantity = Number(request.body?.quantity);
    if (!Number.isInteger(quantity) || quantity < 1) return reply.code(400).send({ message: "Quantity must be at least 1" });
    if (quantity > item.product.stock) return reply.code(400).send({ message: `Only ${item.product.stock} item(s) available` });
    await item.update({ quantity });
    return { message: "Quantity updated", cart: item };
  });

  fastify.delete("/:id", { preHandler: authenticate }, async (request, reply) => {
    const item = await Cart.findOne({ where: { id: request.params.id, userId: request.user.id } });
    if (!item) return reply.code(404).send({ message: "Cart item not found" });
    await item.destroy();
    return { message: "Cart item removed" };
  });

  fastify.delete("/", { preHandler: authenticate }, async (request) => {
    await Cart.destroy({ where: { userId: request.user.id } });
    return { message: "Cart cleared" };
  });
};
