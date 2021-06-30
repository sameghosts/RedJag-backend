//TODO: Install base dependencies and requirements
require('dotenv').config();
const EXPRESS = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

//TODO: Set up GQL requirements
const {
  typeDefs,
  resolvers
} = require('./graphQL')
const {
  schemaDirectives
} = require('./graphQL/directives')


//TODO Instantiate App and structure
const app = EXPRESS();

// Models for graphql server context
const AppModels = require('./database/nosql/models');
// middleware
//Add middleware after build

//TODO: GraphQL Apollo server
const SERVER = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  schemaDirectives: schemaDirectives,
  playground: true,
  //TODO: check and add in context
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

SERVER.applyMiddleware({
  app: app
})


// Dummy API Home Route

app.get('/', (req, res) => {
  res.send("JobJournal API portal home")
})
// App listen
app.listen(process.env.PORT || 3001, () => {
  console.log(`✅ You are listening to to smooth sounds of Port ${process.env.PORT || 3001}`)
})
