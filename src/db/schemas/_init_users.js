// eslint-disable-next-line
const userTable = async (connection) => {
    await connection.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    return connection.schema.hasTable('users').then(exists => {
        if(!exists) {
        return connection.schema.createTable('users', async (table) => {
            table
                .uuid('uuid')
                .defaultTo(connection.raw('uuid_generate_v4()'))
                .notNullable()
                .unique()
                .comment('Universal Unique ID');
            table
                .increments('sequence')
                .notNullable()
                .index()
                .unique()
                .defaultTo(connection.raw('sequence bigserial'))
                .comment('Sequence number for reference');
            table
                .string('userName', 100)
                .notNullable()
                .index()
                .defaultTo('Test username')
                .comment('User Name');
            table
                .string('mobileNumber', 15)
                .notNullable()
                .index()
                .unique()
                // .defaultTo('9876543210')
                .comment('User mobile number');
            table
                .string('email', 150)
                .notNullable()
                .index()
                .unique()
                // .defaultTo('test@gmail.com')
                .comment('User email address');
            table
                .boolean('isActive')
                .index()
                .notNullable()
                .defaultTo(true)
                .comment('User status');
            table
                .boolean('isSuperAdmin')
                .index()
                .notNullable()
                .defaultTo(false)
                .comment('SA Role');
            table
                .string('password', 255)
                .index()
                .notNullable()
                .defaultTo("Test password")
                .comment('User password');
            table.timestamps(true, true);
            }).then();
        }
    }).then();
}

export default userTable;