const authMiddleware = async (request, reply) => {
 
    const authHeader = request.headers.authorization;
 
    if (!authHeader) {
        return reply.code(401).send({
            message: "Unauthorized"
        });
    }
 
    const [scheme, token] = authHeader.split(" ");
 
    if (scheme !== "Bearer" || !token) {
        return reply.code(401).send({
            message: "Unauthorized"
        });
    }
 
    
    request.token = token;
 
    
};
 
module.exports = authMiddleware;
 