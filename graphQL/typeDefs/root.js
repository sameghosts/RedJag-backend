const { gql } = require('apollo-server-express');

// Root = base definitions which will be expounded upon by all typeDef queries / mutations on specific modules

const root = gql`
  type Query {
    root:String
  }
  type Mutation{
    root:String
  }
  type Subscription{
    root:String
  }
  
`