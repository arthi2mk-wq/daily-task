const { DataTypes } = require("sequelize");
const bcrypt = require("bcryptjs");
const sequelize = require("../config/database");

const User = sequelize.define("User", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING(120), allowNull: false },
  email: { type: DataTypes.STRING(180), allowNull: false, unique: true, validate: { isEmail: true } },
  password: { type: DataTypes.STRING(255), allowNull: false },
  role: { type: DataTypes.ENUM("customer", "admin"), allowNull: false, defaultValue: "customer" }
}, { tableName: "users", timestamps: true, createdAt: "created_at", updatedAt: "updated_at" });

User.beforeCreate(async (user) => { user.password = await bcrypt.hash(user.password, 10); });
User.beforeUpdate(async (user) => {
  if (user.changed("password")) user.password = await bcrypt.hash(user.password, 10);
});
User.prototype.comparePassword = function(password) { return bcrypt.compare(password, this.password); };

module.exports = User;
