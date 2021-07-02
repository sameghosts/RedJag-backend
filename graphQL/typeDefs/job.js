// ====== Jobs Type Defs
// Here are all the data type definitions related to jobs model that must be called to pass back and fourth between front end and backend for query's and mutations. See docs folder for associated query and mutation structure. 

// ==== gql dependency from ASE
const { gql } = require('apollo-server-express');

//TODO: Create type defs 
//TODO: Create Query's 
//TODO: Create mutations
const job = gql`

  type JobCollection {
    userId: String!
    userEmail: String!
    recentCache10: [JobPosting]
    recentCache60: [JobPosting]
    fullSearchCache: [JobPosting]
    faveJobs: [JobPosting]
    appliedJobs: [JobPosting]
    dataSeshNLP: [JobPosting]
    resultsNLP: [JobPosting]
  }
  
  type JobPosting {
    title: String!
    companName: String!
    location: String!
    via: String
    description: String
    detectectedExtensions: Extensions
    jobApiId: String
    applicationUrl: String
    jobURI: String
    companyURI: String
  }
  type Extensions {
      postedAt: String
      scheduleType: String
      workFromHome: String
  }

  type dataSetNLP {
    setName: String
    setDate: Int
    analysisType: String
    collectionSize: Int
    collectionTimeline: String
    cacheUserIdent: UserIdentityData
  }

  type resultSetNLP {
    analysisType: String
    analysisDate: Int
    nlpSingle: [String]
    nlpDouble: [String]
    nlpTripple: [String]
  }

`

module.exports = job;