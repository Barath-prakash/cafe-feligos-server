const env = require('../env');

const knexConfig = {
  client: 'pg',
  connection: {
    application_name: `${env.APP_NAME} (${env.DB_NAME})`,
    host: env.DB_HOST,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    port: env.DB_PORT,
  },
  acquireConnectionTimeout: env.KNEX_ACQUIRE_CONNECTION_TIMEOUT,
  debug: env.KNEX_DEBUG,
  useNullAsDefault: env.KNEX_USE_NULL_AS_DEFAULT,
  pool: {
    min: env.KNEX_POOL_MIN,
    max: env.KNEX_POOL_MAX,
  },
  migrations: {
    // directory: './schemas',
    disableTransactions: env.KNEX_MIGRATION_DISABLE_TRANSACTIONS,
    tableName: env.KNEX_MIGRATION_TABLE_NAME,
  }
};

export default knexConfig;
