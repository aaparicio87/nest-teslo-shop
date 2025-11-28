export const EnvConfig = () => ({
  environment: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3001,
  dbPassword: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME,
  dbHost: process.env.DB_HOST || 'localhost',
  dbPort: process.env.DB_PORT || 5432,
  dbUsername: process.env.DB_USERNAME || 'postgres',
});
