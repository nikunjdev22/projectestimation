module.exports = ({ env }) => ({
  host: env('https://dashboard.heroku.com/apps/estimationxcode', '10.0.0.1'),
  port: env.int('PORT', 3306),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
