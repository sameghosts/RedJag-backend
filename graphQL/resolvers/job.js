// ------ Dependencies
const { ApolloError } = require('apollo-server-errors')
const bcrypt = require('bcrypt')

// ------ Auth Middleware
//TODO: Add back in after auth control flow written
// const { issueToken, serializedUser } = require('../../helper/UserAuth');

//TODO: Adding job objects

module.exports = {
  Query: {
    // test query
    jobQueryTest: () =>{
      return 'Hello from the job query resolver. 😎'
    },
  },

  Mutation: {
    // test Mutate
    jobMutateTest: () =>{
      return 'Hello from the job mutation resolver. 😎'
    },
    //createJobCollection(newUserCollection: CollectionInput): Collection!
    createJobCollection: async (
      _,
      { newUserCollection },
      { JobCollection }
    ) =>{
      try {
        //TODO: Figure out why this isn't working and refactor so user cannot create multiple collections and it adds collection ref to user
        // let collection = await JobCollection.find({ userEmail: newUserCollection.userEmail});
        // if (collection) {
        //   // throw new Error("This user already has a collection! Try saving some jobs instead!")
        //   return collection
        // } else {
          
        // }
        let result = await JobCollection.create(newUserCollection);
        return result; 
      } catch (err) {
        throw new ApolloError(err.message, 404)
      }
    },
    addJobsWithType: async (
      _,
      { 
        userEmail,
        type,
        dump
      },
      { JobCollection }
    ) => {
    
        // console.log(userEmail)
        // console.log(type)
        // console.log(dump)
        // console.log(newDump)
        // console.log(newDump.userEmail)
        try{
          let result = await JobCollection.find({
            userEmail: userEmail
          });
          console.log(result[0]);
          if (result[0].faveJobs.length <1 ){
            let newCollection= await JobCollection.create({ userEmail: userEmail
            })
            newCollection.faveJobs = [...dump]
            return newCollection
          } else if (result[0].faveJobs.length >1){
            let destFaveJobs = [...result[0].faveJobs, ...dump]
            result[0].faveJobs = destFaveJobs
            return result[0]
          }

        } catch (err){
          throw new ApolloError(err.message, 404)
        }
        
    
    }
  }
}
