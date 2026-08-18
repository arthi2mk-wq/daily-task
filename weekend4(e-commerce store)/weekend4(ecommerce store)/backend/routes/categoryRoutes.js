const { Category } = require("../models");
const { authenticate, requireAdmin } = require("../middleware/auth");

module.exports = async function categoryRoutes(fastify) {
  fastify.get("/", async () => ({ categories: await Category.findAll({ order: [["name", "ASC"]] }) }));

  fastify.post("/", { preHandler: [authenticate, requireAdmin] }, async (request, reply) => {
    const { name } = request.body || {};
    if (!name?.trim()) return reply.code(400).send({ message: "Category name is required" });
    try {
      const category = await Category.create({ name: name.trim() });
      return reply.code(201).send({ category });
    } catch {
      return reply.code(409).send({ message: "Category already exists" });
    }
  });
};
