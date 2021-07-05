// ------ Dependencies
// const { ApolloError } = require('apollo-server-errors')
// const bcrypt = require('bcrypt')

// ------ Auth Middleware
//TODO: Add back in after auth middlware written
// const { issueToken, serializedUser } = require('../../helper/UserAuth');

module.exports = {
  Query: {
    journalQueryTest: () =>{
      return 'Hello from the journal query resolver. 😎'
    }
  },

  Mutation: {
    journalMutateTest: () =>{
      return 'Hello from the journal mutation resolver. 😎'
    }
  }
}