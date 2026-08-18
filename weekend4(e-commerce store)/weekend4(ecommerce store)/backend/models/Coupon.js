const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Coupon = sequelize.define("Coupon", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  code: { type: DataTypes.STRING(50), allowNull: false, unique: true },
  discountType: { type: DataTypes.ENUM("percentage", "fixed"), allowNull: false, field: "discount_type" },
  discountValue: { type: DataTypes.DECIMAL(12, 2), allowNull: false, field: "discount_value" },
  minimumAmount: { type: DataTypes.DECIMAL(12, 2), defaultValue: 0, field: "minimum_amount" },
  expiresAt: { type: DataTypes.DATE, allowNull: true, field: "expires_at" },
  isActive: { type: DataTypes.BOOLEAN, defaultValue: true, field: "is_active" }
}, { tableName: "coupons", timestamps: false });

module.exports = Coupon;
