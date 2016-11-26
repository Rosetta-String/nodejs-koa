// Connect to the database
var knex = require('knex'),
    config;

config = {
    development: {
        client: 'pg',
        // debug: true,
        connection: {
            host: 'postgres',
            user: 'postgres',
            database: 'rosetta_development',
            password: 'rosetta'
        }
    },
    test: {
        client: 'pg',
        // debug: true,
        connection: {
            host: 'postgres',
            user: 'postgres',
            database: 'rosetta_test',
            password: 'rosetta'
        }
    },
    staging: {
        client: 'pg',
        // debug: true,
        connection: process.env.DATABASE_URL
    },
    production: {
        client: 'pg',
        // debug: true,
        connection: process.env.DATABASE_URL
    }
};

module.exports = knex(config[process.env.NODE_ENV || 'development']);
