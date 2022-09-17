module.exports = ({ env }) => ({
  host: env('HOST', '10.0.0.1'),
  port: env.int('PORT', 1338),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
