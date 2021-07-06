//TODO: Install base dependencies and requirements
require('dotenv').config();
const EXPRESS = require('express');
const { ApolloServer } = require('apollo-server-express');

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
const AppModels = require('./models');
// middleware
const AuthMiddleware = require('./middleware/auth')
//Add middleware after build
// console.log(typeDefs, resolvers, schemaDirectives)

app.use(AuthMiddleware);

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

SERVER.applyMiddleware({
  app: app
});


// Dummy API Home Route

app.get('/', (req, res) => {
  res.send("JobJournal API portal home")
})
// App listen
app.listen(process.env.PORT || 3001, () => {
  console.log(`✅ You are listening to to smooth sounds of Port ${process.env.PORT || 3001}`)
})
