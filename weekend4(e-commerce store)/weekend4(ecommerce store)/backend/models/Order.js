const { DataTypes } = require("sequelize");

const sequelize = require("../config/database");

const Order = sequelize.define(
  "Order",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "user_id",
    },

    totalAmount: {
      type: DataTypes.DECIMAL(12, 2),
      allowNull: false,
      field: "total_amount",
    },

    discountAmount: {
      type: DataTypes.DECIMAL(12, 2),
      allowNull: false,
      defaultValue: 0,
      field: "discount_amount",
    },

    couponCode: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: "coupon_code",
    },

    status: {
      type: DataTypes.ENUM(
        "pending",
        "confirmed",
        "processing",
        "shipped",
        "delivered",
        "cancelled"
      ),

      allowNull: false,

      defaultValue: "confirmed",
    },

    paymentStatus: {
      type: DataTypes.ENUM(
        "pending",
        "paid",
        "failed"
      ),

      allowNull: false,

      defaultValue: "paid",

      field: "payment_status",
    },

    paymentMethod: {
      type: DataTypes.STRING(40),

      allowNull: false,

      defaultValue: "mock",

      field: "payment_method",
    },

    shippingName: {
      type: DataTypes.STRING(120),

      allowNull: false,

      field: "shipping_name",
    },

    shippingAddress: {
      type: DataTypes.TEXT,

      allowNull: false,

      field: "shipping_address",
    },

    shippingPhone: {
      type: DataTypes.STRING(30),

      allowNull: false,

      field: "shipping_phone",
    },

    
    createdAt: {
      type: DataTypes.DATE,

      field: "created_at",
    },


    updatedAt: {
      type: DataTypes.DATE,

      field: "updated_at",
    },
  },

  {
    tableName: "orders",

    timestamps: true,

    
    createdAt: "createdAt",

    updatedAt: "updatedAt",
  }
);

module.exports = Order;