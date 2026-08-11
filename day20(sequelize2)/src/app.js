const fastify = require('fastify');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');

function buildApp() {
  const app = fastify({ logger: true });

  app.get('/', async () => ({ status: 'ok', message: 'Fastify + Sequelize + PostgreSQL API' }));

  app.register(userRoutes);
  // app.register(postRoutes);

  return app;
}

module.exports = buildApp;
