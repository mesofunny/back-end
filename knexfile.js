const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    useNullAsDefault: true,
    migrations: {
      directory: './models/migrations',
      tableName: 'dbmigrations',
    },
    seeds: { directory: './models/seeds' },
  },
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      port: 5432,
      database: 'jokesdb',
      user: 'benjaminajewole',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './models/migrations',
      tableName: 'dbmigrations',
    },
    seeds: { directory: './models/seeds' },
  },
  testing: {
    client: 'pg',
    connection: {
      host: 'localhost',
      port: 5432,
      database: 'jokesdb',
      user: 'benjaminajewole',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './models/migrations',
      tableName: 'dbmigrations',
    },
    seeds: { directory: './models/seeds' },
  },
};
