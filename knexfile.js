const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
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
  },
  development: {
    client: 'sqlite3',
    connection: { filename: './models/jokes.db3' },
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
