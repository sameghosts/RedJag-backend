// ------ Dependencies
// const { ApolloError } = require('apollo-server-errors')
// const bcrypt = require('bcrypt')

// ------ Auth Middleware
//TODO: Add back in after auth middlware written
// const { issueToken, serializedUser } = require('../../helper/UserAuth');

module.exports = {
  Query: {
    //test query
    journalQueryTest: () =>{
      return 'Hello from the journal query resolver. 😎'
    }
  },

  Mutation: {
    //Test mutation
    journalMutateTest: () =>{
      return 'Hello from the journal mutation resolver. 😎'
    }, 
    // createUserJournal - make a new user journal prior to loading entries
    createUserJournal: async (
      _,
      { newUserJournal }, 
      { JobJournal },
      { User }
    ) => {
      let result = await JobJournal.create(newUserJournal);
      // let user = User.findOne({ email: newUserJournal.userEmail}).then(foundUser =>{
      //   foundUser.jobJournal = result._id
      //   foundUser.save()
      //   console.log('added job journal to user successfully')
      // })
      // console.log(user) 
      
      return result; 

    }
  }
}