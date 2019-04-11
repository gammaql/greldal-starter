const dotenv = require("dotenv");

require('ts-node/register');

dotenv.config();

module.exports = {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
        directory: 'src/migrations'
    },
    seeds: {
        directory: 'src/seeds'
    }
};
