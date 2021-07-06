//TODO: Sketch out all the schema
const { gql } = require('apollo-server-express');

// Import Schema
const root = require('./root')
const hello = require('./hello')
const user = require('./user')
const journal = require('./journal')
const job = require('./job')

// Array of imports for export
// const schemaArray = [root, hello]

// Export
module.exports = [root, hello, user, journal];

