//TODO: Import all resolvers

const hello = require('./hello')
const user = require('./user')
const journal = require('./journal')
const job = require('./job')

//TODO: add all resolvers to export array
module.exports = [hello, user, journal];