const sequelize = require('../config/database');
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
  foreignKey: 'userId',
  as: 'posts',
});
Post.belongsTo(User, {
  foreignKey: 'userId',
  as: 'author',
});

Post.hasMany(Comment, {
  foreignKey: 'postId',
  as: 'comments',
});
Comment.belongsTo(Post, {
  foreignKey: 'postId',
  as: 'post',
});

User.hasMany(Comment, {
  foreignKey: 'userId',
  as: 'comments',
});
Comment.belongsTo(User, {
  foreignKey: 'userId',
  as: 'commenter',
});

module.exports = {
  sequelize,
  User,
  Post,
  Comment,
};
