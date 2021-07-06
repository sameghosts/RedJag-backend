// ====== Jobs Type Defs
// Here are all the data type definitions related to jobs model that must be called to pass back and fourth between front end and backend for query's and mutations. See docs folder for associated query and mutation structure. 

// ==== gql dependency from ASE
const { gql } = require('apollo-server-express');

const jobcollection = gql`
type JobCollection {
  id: ID
  userId: String
  userEmail: String!
  recentCache10: String
  recentCache60: String
  fullSearchCache: String
  faveJobs: String
  appliedJobs: String
  dataSeshNLP: String
  resultsNLP: String
  createdAt: String
  updatedAt: String
}
extend type Query {
  jobQueryTest: String
  jobSerpiQuery(userEmail: String, query: String!, location: String): SearchResult!
}
extend type Mutation {
  jobMutateTest: String
  createJobCollection(newUserCollection: CollectionInput): JobCollection!
  addJobsWithType(userEmail: String!, type: String!, dump: [JobPostingInput]): JobCollection!
  addJobsWithTypeString(userEmail: String!, type: String!, dump: String!): JobCollection!
}
#Input types
input CollectionInput {
  userEmail: String!
  userId: String
}
input JobPayloadInput{
  userEmail: String
  type: String
  dump: String
}
input JobPayloadTwo{
  userEmail: String!
  type: String
  dump: String
}
input JobPostingInput {
  title: String!
  companyName: String!
  location: String!
  via: String
  description: String
  detectedExtensions: InputExtensions
  jobApiId: String
  applicationUrl: String
  jobURI: String
  companyURI: String
  thumbnail: String
}
input InputExtensions{
  postedAt: String
  scheduleType: String
  workFromHome: String
}

# meta types
type JobPosting {
  id: ID!
  title: String!
  companyName: String!
  location: String
  via: String
  description: String
  detectedExtensions: Extensions
  jobApiId: String
  applicationUrl: String
  jobURI: String
  companyURI: String
  thumbnail: String
  createdAt: String
  updatedAt: String
}
type Extensions{
  postedAt: String
  scheduleType: String
  workFromHome: String
}

type SearchResult {
  results: String
}

type dataSetNLP{
  id: ID
  setName: String
  setDate: String
  analysisType: String
  collectionSize: Int
  collectionTimeline: String
  cacheUserIdent: UserIdentityData
  jobSet: [JobPosting]
  complete: Boolean
  createdAt: String
  updatedAt: String
}
type resultSetNLP{
  id: ID
  analysisType: String
  analysisDate: Int
  nlpSingle: [String]
  nlpDouble: [String]
  nlpTripple: [String]
  createdAt: String
  updatedAt: String
}
`
module.exports = jobcollection; 