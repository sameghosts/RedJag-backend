const { gql } = require('apollo-server-express');


const hello = gql`
  type Hello {
    hello: String!
  }
`