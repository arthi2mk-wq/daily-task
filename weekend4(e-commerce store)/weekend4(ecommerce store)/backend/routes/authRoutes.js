const jwt = require("jsonwebtoken");
const { User } = require("../models");

module.exports = async function authRoutes(fastify) {
  fastify.post("/register", async (request, reply) => {
    try {
      const { name, email, password } = request.body || {};
      if (!name?.trim() || !email?.trim() || !password) {
        return reply.code(400).send({ message: "Name, email and password are required" });
      }
      if (password.length < 6) {
        return reply.code(400).send({ message: "Password must contain at least 6 characters" });
      }
      const existing = await User.findOne({ where: { email: email.trim().toLowerCase() } });
      if (existing) return reply.code(409).send({ message: "Email already registered" });

      const user = await User.create({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        password,
        role: "customer"
      });
      return reply.code(201).send({
        message: "Registration successful",
        user: { id: user.id, name: user.name, email: user.email, role: user.role }
      });
    } catch (error) {
      fastify.log.error(error);
      return reply.code(500).send({ message: "Registration failed" });
    }
  });

  fastify.post("/login", async (request, reply) => {
    try {
      const { email, password } = request.body || {};
      const user = await User.findOne({ where: { email: email?.trim().toLowerCase() } });
      if (!user || !(await user.comparePassword(password || ""))) {
        return reply.code(401).send({ message: "Invalid email or password" });
      }

      const token = jwt.sign(
        { id: user.id, email: user.email, role: user.role, name: user.name },
        process.env.JWT_SECRET,
        { expiresIn: "10d" }
      );

      return reply.send({
        message: "Login successful",
        token,
        user: { id: user.id, name: user.name, email: user.email, role: user.role }
      });
    } catch (error) {
      fastify.log.error(error);
      return reply.code(500).send({ message: "Login failed" });
    }
  });
};
