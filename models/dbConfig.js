const knex = require('knex');
const knexConfig = require('../knexfile');

const environment = process.env.DB_ENV || 'production';
console.log(environment)
module.exports = knex(knexConfig[environment]);
