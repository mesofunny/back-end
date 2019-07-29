const knex = require('knex');
const knexConfig = require('../knexfile');

const environment = process.env.DB_ENV || 'testing';
console.log(environment);

module.exports = knex(knexConfig[environment]);
