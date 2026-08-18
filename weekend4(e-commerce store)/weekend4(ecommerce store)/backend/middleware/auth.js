const jwt = require("jsonwebtoken");

async function authenticate(request, reply) {
  try {
    const header = request.headers.authorization || "";
    if (!header.startsWith("Bearer ")) {
      return reply.code(401).send({ message: "Bearer token required" });
    }
    request.user = jwt.verify(header.slice(7), process.env.JWT_SECRET);
  } catch {
    return reply.code(401).send({ message: "Invalid or expired token" });
  }
}

async function requireAdmin(request, reply) {
  if (request.user?.role !== "admin") {
    return reply.code(403).send({ message: "Admin access required" });
  }
}

module.exports = { authenticate, requireAdmin };
