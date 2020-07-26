import chalk from 'chalk';
import envalid, { cleanEnv } from 'envalid';

console.log(chalk.bgCyan('Initialize environment variables..')); //eslint-disable-line

module.exports = cleanEnv(
  process.env,
  {
    APP_CODE: envalid.str({ default: 'cafe-feligos' }),
    APP_NAME: envalid.str({ default: 'Cafe Feligos' }),
    DB_HOST: envalid.host({ devDefault: 'localhost' }),
    DB_PORT: envalid.port({ default: 5433 }),
    DB_USER: envalid.str({ devDefault: 'postgres', example: 'postgres' }),
    DB_PASSWORD: envalid.str({ devDefault: 'postgres', example: '53cr3t' }),
    DB_NAME: envalid.str({ default: 'cafe_feligos_dev', devDefault: 'cafe_feligos_dev' }),
    DEBUG: envalid.str({ default: '' }),
    KNEX_DEBUG: envalid.bool({ default: false, devDefault: true }),
    KNEX_POOL_MIN: envalid.num({ default: 2 }),
    KNEX_POOL_MAX: envalid.num({ default: 50 }),
    KNEX_ACQUIRE_CONNECTION_TIMEOUT: envalid.num({ default: 60000 }),
    KNEX_USE_NULL_AS_DEFAULT: envalid.bool({ default: false }),
    KNEX_MIGRATION_TABLE_NAME: envalid.str({ default: 'knex_migrations' }),
    KNEX_MIGRATION_DISABLE_TRANSACTIONS: envalid.bool({ default: false }),
    NODEMAILER_HOST: envalid.str({ default: 'gmail' }),
    NODEMAILER_PORT: envalid.num({ default: 587 }),
    NODEMAILER_USER: envalid.str({ default: 'test@gmail.com' }),
    NODEMAILER_PASSWORD: envalid.str({ default: 'test1234' }),
    MY_SECRET_KEY: envalid.str({ default: 'cafe_feligos_secret_key' })
  },
  {
    strict: true,
  },
);
