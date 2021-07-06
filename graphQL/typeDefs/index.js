// Import Schema
const root = require('./root')
const hello = require('./hello')
const user = require('./user')
const journal = require('./journal')
const jobcollection = require('./jobcollection')

// Array of imports for export
// const schemaArray = [root, hello]

// Export
module.exports = [root, hello, user, journal, jobcollection];