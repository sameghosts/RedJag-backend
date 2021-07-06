// ------ Dependencies
// const { ApolloError } = require('apollo-server-errors')
// const bcrypt = require('bcrypt')

const { ApolloError } = require("apollo-server-errors");

// ------ Auth Middleware
//TODO: Add back in after auth middlware written
// const { issueToken, serializedUser } = require('../../helper/UserAuth');

//TODO: In createUserJournal add in crud to user with id of journal

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

    },
    addJournalEntry: async (
      _, 
      { newEntry },
      { JobJournal }
    ) => {
      try {
        // console.log(newEntry)
        console.log(newEntry.userEmail)
        let journal = await JobJournal.findOne({userEmail: newEntry.userEmail});
        if (!journal) {
          throw new Error("Journal not found create one!")
        }
        let cleanedEntry = {
          jobTitle: newEntry.jobTitle,
          location: newEntry.location,
          company: newEntry.company,
          applicationUrl: newEntry.applicationUrl,
          applicationPlatform: newEntry.applicationPlatform,
        } 
        journal.journalEntries.push(cleanedEntry)
        await journal.save()
        return journal
      } catch (err) {
        throw new ApolloError(err.message, 404)
      }
    }
  }
}