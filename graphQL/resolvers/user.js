// ------ Dependencies
const { ApolloError } = require('apollo-server-errors')
const bcrypt = require('bcrypt')

// ------ Auth Middleware
//TODO: Add back in after auth middlware written
// const { issueToken, serializedUser } = require('../../helper/UserAuth');

module.exports = {
  Query: {
    test: () => {
      return 'Hello from the user resolver.'
    } 
  },

  Mutation: {
    test: () => {
      return 'test successful'
    }
  }
}