// ====== Journal Type Defs
// Here are all the data type definitions related to journal model that must be called to pass back and fourth between front end and backend for query's and mutations. See docs folder for associated query and mutation structure. 

// ==== gql dependency from ASE
const { gql } = require('apollo-server-express');

//TODO: Create Query's 
//TODO: Create mutations
const journal = gql`

type Journal {
  id: ID!
  userId: String
  userEmail: String!
  journalEntries: [JobEntry]
  createdAt: String
  updatedAt: String
}
extend type Query {
  journalQueryTest: String
}
extend type Mutation {
  journalMutateTest: String
  createUserJournal(newUserJournal: JournalInput): Journal!
  addJournalEntry(newEntry: EntryInput): Journal
}
#### Input Types
# Journal input 
input JournalInput {
  userEmail: String!
  userId: String
}

input EntryInput {
  userEmail: String
  jobTitle: String
  location: String
  company: String
  applicationUrl: String
  applicationPlatform: String
  jobId: String
  jobUrl: String
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
  isActive: Boolean
  endResult: String
  contacts: [Contact]
  entryReminders: [Reminder]
  entryNotes: [Note]
  createdAt: String
  updatedAt: String
}

type Contact {
  contactName: String
  contactPostition: String
  contactNumber: String
  contactLinkedIn: String
  contactNotes: [Note]
  contactReminders: [Reminder]
  createdAt: String
  updatedAt: String
}
type Reminder {
  remindType: String
  remindDate: Int
}
type Note {
  noteName: String
  noteBody: String
  noteDate: Int
  createdAt: String
  updatedAt: String
}
`

module.exports = journal;