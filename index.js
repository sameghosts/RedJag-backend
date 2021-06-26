//TODO: Install base dependencies and requirements
require('dotenv').config();
const EXPRESS = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

//TODO: Set up GQL requirements
const {
  typeDefs,
  resolvers
} = require('./graphQL');
const {
  schemaDirectives
} = require('./graphQL/directives');

//TODO Instantiate App and structure
const app = EXPRESS();

// Models for graphql server context
const AppModels = require('./models');
// middleware
  //Add middleware after build

//TODO: GraphQL Apollo server
const SERVER = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  schemaDirectives: schemaDirectives,
  playground: true,
  context: ({ req }) => {
    let {
      user,
      isAuth,
    } = req;
    return{
      req,
      user,
      isAuth,
      ...AppModels,
    }
  }
});


// Dummy API Home Route

// App listen

