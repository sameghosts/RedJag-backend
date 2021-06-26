const { gql } = require('apollo-server-express');


const hello = gql`
  extend type Query {
    hello: String!
  }
`
module.exports = hello;