const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
 
const Employee = sequelize.define(
    "Employee",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
 
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
 
        age: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
 
        department: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        tableName: "employees",
        timestamps: false
    }
);
 
module.exports = Employee;
 