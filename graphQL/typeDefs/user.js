// ====== User Type Defs
// Here are all the data type definitions related to user model that must be called to pass back and fourth between front end and backend for query's and mutations. See docs folder for associated query and mutation structure. 

// ==== gql dependency from ASE
const { gql } = require('apollo-server-express');

const user = gql`
  type User {
      id: ID!
      email: String!
      username: String!
      firstName: String!
      lastName: String!
      # profile: UserProfile
      # jobJournal: JobJournal
      # jobCollection: JobCollection
      # todoCollection: TodoCollection
      createdAt: String
      updatedAt: String
    }
  # User Queries
  extend type Query {
#     #test
    test: String
#     #login
#       #### Auth loc this Eventually!!!!
#     # loginUser: (username: String!, password:String!)
#     #profile
#     # getUserProfile: (username: String!)

#     #here or elsewhere:
#       # User Journal, User Collection, UserTodo
  }

# # User Mutations
  extend type Mutation {
#   #Register new user
#     #### Auth loc this Eventually!!!!
  test: String
  registerUser(newUser: UserInput!): AuthUser!
  }   
  
  # Input schema for new user / registration
  input UserInput {
    email: String!
    username: String!
    firstName: String!
    lastName: String!
    password: String!
  }

  # AuthUser Type, login and register payload return
  type AuthUser {
    user: User!
    token: String!
  }
`
module.exports = user;