const { Op } = require('sequelize');
const { User, Post } = require('../models');

async function userRoutes(fastify, options) {

  fastify.post('/users', async (request, reply) => {
    const user = await User.create(request.body);
    reply.send(user);
  });

  fastify.get('/users', async (request, reply) => {
    const users = await User.findAll();
    reply.send(users);
  });

  fastify.get('/users/adults', async (request, reply) => {
    const users = await User.findAll({
      where: { age: { [Op.gte]: 18 } },
    });
    reply.send(users);
  });

  fastify.get('/users/with-posts', async (request, reply) => {
    const users = await User.findAll({
      include: [{ model: Post, as: 'posts', required: true }],
    });
    reply.send(users);
  });

  fastify.get('/users/raw', async (request, reply) => {
    const users = await User.findAll({ raw: true });
    reply.send(users);
  });
}

module.exports = userRoutes;