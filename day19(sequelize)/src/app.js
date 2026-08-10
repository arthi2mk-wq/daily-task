const Fastify = require("fastify");
const sequelize = require("./config/database");
const authMiddleware = require("./middlewares/authMiddleware");
const employeeRoutes = require("./routes/employeeRoutes");
 
const fastify = Fastify({ logger: true });
 

fastify.addHook("preHandler", authMiddleware);
 
fastify.register(employeeRoutes, { prefix: "/employees" });
 
const start = async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connection established.");
 
        await sequelize.sync();
 
        await fastify.listen({ port: process.env.PORT || 3000, host: "0.0.0.0" });
    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
};
 
start();
 