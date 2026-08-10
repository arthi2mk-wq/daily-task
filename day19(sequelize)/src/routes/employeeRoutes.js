const {
    getEmployees,
    createEmployee
} = require("../controllers/employeeController");
 
async function employeeRoutes(fastify, options) {
 
    
    fastify.get("/", getEmployees);
 
   
    fastify.post("/", createEmployee);
 
}
 
module.exports = employeeRoutes;
 