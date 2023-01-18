export default () => ({
  port: parseInt(process.env.SERVER_PORT, 10) || 9000,
  prefix: process.env.SERVER_PREFIX || 'api',
  db: {
    connection: process.env.DB_CONNECTION,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10) || 5432,
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  },
});
