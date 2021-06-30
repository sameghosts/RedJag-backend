// ====== Journal Type Defs
// Here are all the data type definitions related to journal model that must be called to pass back and fourth between front end and backend for query's and mutations. See docs folder for associated query and mutation structure. 

// ==== gql dependency from ASE
const { gql } = require('apollo-server-express');

//TODO: Create Query's 
//TODO: Create mutations
const journal = gql`

type Journal {
  userId: String
  userEmail: String
  journalEntries: [JobEntry]
}

type JobEntry {
  jobTitle: String
  jobId: String
  jobUrl: String
  company: String
  postion: String
  location: String
  applicationUrl: String
  applicationPlatform: String
  isActive: String
  endResult: String
  contacts: [Contact]
}

type Contact {
  contactName: String
  contactPostition: String
  contactNumber: String
  contactLinkedIn: String
  notes: [String]
  reminders: [Reminder]
}
type Reminder {
  remindType: String
  remindDate: Int
}
extend type Query {
  journalQueryTest: String
}
extend type Mutation {
  journalMutateTest: String
}
`

module.exports = journal;