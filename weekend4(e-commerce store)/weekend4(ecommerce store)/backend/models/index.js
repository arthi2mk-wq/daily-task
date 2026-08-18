const User = require("./User");
const Category = require("./Category");
const Product = require("./Product");
const Cart = require("./Cart");
const Order = require("./Order");
const OrderItem = require("./OrderItem");
const Coupon = require("./Coupon");

User.hasMany(Cart, { foreignKey: "userId", as: "cartItems", onDelete: "CASCADE" });
Cart.belongsTo(User, { foreignKey: "userId" });

Category.hasMany(Product, { foreignKey: "categoryId", as: "products" });
Product.belongsTo(Category, { foreignKey: "categoryId", as: "category" });

User.hasMany(Order, { foreignKey: "userId", as: "orders", onDelete: "CASCADE" });
Order.belongsTo(User, { foreignKey: "userId", as: "user" });

Order.hasMany(OrderItem, { foreignKey: "orderId", as: "items", onDelete: "CASCADE" });
OrderItem.belongsTo(Order, { foreignKey: "orderId" });

Product.hasMany(Cart, { foreignKey: "productId", as: "cartItems", onDelete: "CASCADE" });
Cart.belongsTo(Product, { foreignKey: "productId", as: "product" });

Product.hasMany(OrderItem, { foreignKey: "productId", as: "orderItems" });
OrderItem.belongsTo(Product, { foreignKey: "productId", as: "product" });

module.exports = { User, Category, Product, Cart, Order, OrderItem, Coupon };
