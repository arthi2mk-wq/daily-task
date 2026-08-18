const { Op } = require("sequelize");
const { Product, Category } = require("../models");
const { authenticate, requireAdmin } = require("../middleware/auth");

const includeCategory = { model: Category, as: "category", attributes: ["id", "name"] };

module.exports = async function productRoutes(fastify) {
  fastify.get("/", async (request, reply) => {
    try {
      const { search, category, minPrice, maxPrice } = request.query || {};
      const where = {};
      if (search) where.name = { [Op.iLike]: `%${search}%` };
      if (minPrice !== undefined || maxPrice !== undefined) {
        where.price = {};
        if (minPrice !== undefined) where.price[Op.gte] = Number(minPrice);
        if (maxPrice !== undefined) where.price[Op.lte] = Number(maxPrice);
      }

      const include = [{ ...includeCategory, required: Boolean(category) }];
      if (category && category !== "all") include[0].where = { name: category };

      const products = await Product.findAll({ where, include, order: [["id", "ASC"]] });
      return { products };
    } catch (error) {
      fastify.log.error(error);
      return reply.code(500).send({ message: "Failed to fetch products" });
    }
  });

  fastify.get("/:id", async (request, reply) => {
    const product = await Product.findByPk(request.params.id, { include: [includeCategory] });
    if (!product) return reply.code(404).send({ message: "Product not found" });
    return { product };
  });

  fastify.post("/", { preHandler: [authenticate, requireAdmin] }, async (request, reply) => {
    try {
      const { name, description, price, imageUrl, stock, categoryId } = request.body || {};
      const product = await Product.create({ name, description, price, imageUrl, stock, categoryId });
      return reply.code(201).send({ product });
    } catch (error) {
      fastify.log.error(error);
      return reply.code(400).send({ message: "Could not create product" });
    }
  });

  fastify.put("/:id", { preHandler: [authenticate, requireAdmin] }, async (request, reply) => {
    const product = await Product.findByPk(request.params.id);
    if (!product) return reply.code(404).send({ message: "Product not found" });
    await product.update(request.body);
    return { product };
  });

  fastify.delete("/:id", { preHandler: [authenticate, requireAdmin] }, async (request, reply) => {
    const product = await Product.findByPk(request.params.id);
    if (!product) return reply.code(404).send({ message: "Product not found" });
    await product.destroy();
    return { message: "Product deleted" };
  });
};
