const knex = require('knex')
const options = require('./config')

module.exports = knex(options);