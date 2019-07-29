const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    useNullAsDefault: true,
    migrations: {
      directory: './models/migrations',
      tableName: 'dbmigrations'
    },
    seeds: { directory: './models/seeds' }
  },
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      port: 5432,
      database: 'jokesdb',
      user: 'benjaminajewole'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './models/migrations',
      tableName: 'dbmigrations'
    },
    seeds: { directory: './models/seeds' }
  },
  testing: {
    client: 'sqlite3',
    connection: {
      filename: './models/test_jokes.db3'
    },
    useNullAsDefault: true,
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      }
    },
    migrations: {
      directory: './models/migrations',
      tableName: 'dbmigrations'
    },
    seeds: { directory: './models/seeds' }
  }
};
