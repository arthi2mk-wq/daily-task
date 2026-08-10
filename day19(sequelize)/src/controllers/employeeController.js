const employeeService = require("../services/employeeService");
const { successResponse } = require("../utils/response");
 
const getEmployees = async (request, reply) => {
    try {
        const employees = await employeeService.getAllEmployees();
        return reply.send(successResponse(employees));
    } catch (error) {
        console.error(error);
        return reply.code(500).send({
            message: "Error fetching employees"
        });
    }
};
 
const createEmployee = async (request, reply) => {
    try {
        const { name, age, department } = request.body || {};
 
        if (!name || !age || !department) {
            return reply.code(400).send({
                message: "name, age and department are required"
            });
        }
 
        const employee = await employeeService.createEmployee(request.body);
        return reply.code(201).send(successResponse(employee));
    } catch (error) {
        console.error(error);
        return reply.code(500).send({
            message: "Error creating employee",
            error: error.message
        });
    }
};
 
module.exports = {
    getEmployees,
    createEmployee
};
 