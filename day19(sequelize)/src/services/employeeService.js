const { Employee } = require("../models");
 
const getAllEmployees = async () => {
    return await Employee.findAll();
};
 
const createEmployee = async (data) => {
    return await Employee.create(data);
};
 
module.exports = {
    getAllEmployees,
    createEmployee
};
 