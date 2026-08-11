const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Comment = sequelize.define('Comment', {
  body: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'comments',
  timestamps: true,
});

module.exports = Comment;
