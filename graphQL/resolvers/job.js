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
      { newDump },
      { JobCollection }
    ) => {
      try {
        
        console.log(newDump)
        console.log(newDump.userEmail)
        let collection = await JobCollection.find(
          {email: newDump.userEmail }
        );
        // let newfaveJobs = [dump, ...collection.faveJobs]
          // collection.faveJobs = newfaveJobs 
          // await collection.save()
        return collection
      // if (newJobDump.type === "recentCache10"){
        //   let collection = await JobCollection.findByIdAndUpdate(
        //     {_id: newJobDump.id }, 
        //     { 
        //       recentCache10: [...recentCache10, ...newJobDump.dump]
        //     }
        //   );
        //   return collection
        // } else if (newJobDump.type === "faveJobs"){
        //   let collection = await JobCollection.findByIdAndUpdate(
        //     {_id: newJobDump.id }, 
        //     { 
        //       faveJobs: [...faveJobs, ...newJobDump.dump]
        //     }
          // );
          // return collection
      // }

      } catch (err){
        throw new ApolloError(err.message, 404)
      }
    }
  }
}
