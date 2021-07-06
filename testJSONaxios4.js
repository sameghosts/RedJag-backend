const axios = require('axios')

  axios.post('http://localhost:3001/graphql', {
    query: `
    query JOBSEARCH (
    $userEmail: String
    $query: String!
    $location: String!
  ) {
    jobSerpiQuery (
      userEmail: $userEmail
      query: $query
      location: $location
    ){
      result
    }
    }
    `, 
    variables: {
      query: "junior software engineer",
      location: "new york, ny"
    }
  }).then((res =>{
    console.log(res)
    console.log(res.data)
    return(res)
  })).catch(err =>console.log(err))