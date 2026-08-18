const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Cart = sequelize.define("Cart", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  userId: { type: DataTypes.INTEGER, allowNull: false, field: "user_id" },
  productId: { type: DataTypes.INTEGER, allowNull: false, field: "product_id" },
  quantity: { type: DataTypes.INTEGER, allowNull: false, validate: { min: 1 } }
}, { tableName: "cart", timestamps: true, createdAt: "created_at", updatedAt: "updated_at",
  indexes: [{ unique: true, fields: ["user_id", "product_id"] }]
});

module.exports = Cart;
