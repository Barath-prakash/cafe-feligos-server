import chalk from 'chalk';
import knexFile from './knexFile';
// import createUsersTable from './schemas/_init_users';

console.log(chalk.bgBlue('Initialize Knex connection..')); //eslint-disable-line
const connection = require('knex')({
  client: knexFile.client,
  connection: knexFile.connection,
  pool: {
    ...knexFile.pool,
    afterCreate: function (conn, done) {
        console.log(chalk.gray(`Knex pool initialized! [knexUid: ${conn.__knexUid}, processID: ${conn.processID}]`)); //eslint-disable-line
        done(conn);
    }
  },
});

// Create Tables Once
// createUsersTable(connection);

export default connection;
