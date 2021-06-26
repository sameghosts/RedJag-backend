//TODO: Sketch out all the schema

// Import Schema
const root = require('./root')
const hello = require('./hello')
// const user = require('./user')

// Array of imports for export
const schemaArray = [root, hello]

// Export
module.exports = schemaArray;

