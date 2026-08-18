const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Product = sequelize.define("Product", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING(180), allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  price: { type: DataTypes.DECIMAL(12, 2), allowNull: false, validate: { min: 0 } },
  imageUrl: { type: DataTypes.STRING(500), allowNull: true, field: "image_url" },
  stock: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 0, validate: { min: 0 } },
  categoryId: { type: DataTypes.INTEGER, allowNull: false, field: "category_id" }
}, { tableName: "products", timestamps: true, createdAt: "created_at", updatedAt: "updated_at" });

module.exports = Product;
