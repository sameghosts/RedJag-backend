// ------ Dependencies
const { ApolloError } = require('apollo-server-errors')
const bcrypt = require('bcrypt')

// ------ Auth Middleware
//TODO: Add back in after auth control flow written
// const { issueToken, serializedUser } = require('../../helper/UserAuth');

//TODO: Add Type logic for dump
 //TODO: Figure out why this isn't working and refactor so user cannot create multiple collections and it adds collection ref to user
        // let collection = await JobCollection.find({ userEmail: newUserCollection.userEmail});
        // if (collection) {
        //   // throw new Error("This user already has a collection! Try saving some jobs instead!")
        //   return collection
        // } else {
          
        // }

module.exports = {
  Query: {
    // test query
    jobQueryTest: () =>{
      return 'Hello from the job query resolver. 😎'
    },
    //Serpi query
    //   jobSerpiQuery(query: String!, location: String!): [JobPosting]
    // jobSerpiQuery: async (
    //   _,
    //   {
    //     query
    //   },
    // ) => {
    //   try {
    //     const search = new SerpApi.GoogleSearch(`${process.env.SERPI_KEY}`);

    //     const params = {
    //       engine: "google_jobs",
    //       q: `${query}` ,
    //       location: `${location}`,
    //       hl: "en"
    //     };
        
    //     const callback =  (data) => {
    //       // console.log(data['jobs_results']);
    //       let resultsString = JSON.stringify(data['jobs_results'])
    //       // console.log(data['jobs_results'])
    //       // let response = console.log(`${resultsString}`)
    //       let response = {"jobSerpiQuery": { 
    //         "results": `${resultsString}`} } 
        
    //       console.log(response)
    //       return response
    //       }
    //     // Show result as JSON
    //     return search.json(params, callback)
    //   }
    //   catch (err) {
    //     throw new ApolloError(err.message, 404)
    //   }
    // }
  },

  Mutation: {
    // test Mutate
    jobMutateTest: () =>{
      return 'Hello from the job mutation resolver. 😎'
    },
    //createJobCollection(newUserCollection: CollectionInput): Collection!
    // createJobCollection: async (
    //   _,
    //   { newUserCollection },
    //   { JobCollection }
    // ) =>{
    //   try {
    //     let result = await JobCollection.create(newUserCollection);
    //     return result; 
    //   } catch (err) {
    //     throw new ApolloError(err.message, 404)
    //   }
    // },
    // addJobsWithType: async (
    //   _,
    //   { 
    //     userEmail,
    //     type,
    //     dump
    //   },
    //   { JobCollection }
    // ) => {
    //     try{
    //       let result = await JobCollection.find({
    //         userEmail: userEmail
    //       });
    //       console.log(result[0]);
    //         let destFaveJobs = [...result[0].faveJobs, ...dump]
    //         result[0].faveJobs = destFaveJobs
    //         let newResult = result[0].save()
    //         return newResult
          

    //     } catch (err){
    //       throw new ApolloError(err.message, 404)
    //     }
    // }, 
//     addJobsWithTypeString: async (
//       _,
//       { 
//         userEmail,
//         type,
//         dump
//       },
//       { JobCollection }
//     ) => {
//         try{
//           let result = await JobCollection.find({
//             userEmail: userEmail
//           });
//           // console.log(`heres the result ${result[0]}`);
//           // console.log(result[0])
//           // console.log(type)
//           let parsed = await JSON.parse(dump)
//             console.log(parsed)
//             // JSON.parse(dump).forEach(job =>{
//             //   result[0].faveJobs.push(job)
//             // })
//             let combined = [...result[0].recentCache60,...parsed]
//             result[0].recentCache60 = [...combined];
//             // console.log(result[0].faveJobs)
//             // let dumpParsed = JSON.parse(dump)
//             // console.log(`dumpParsed here 🚨⬇️ ${dumpParsed}`)
//             let response = await result[0].save()
//             return response.data
          
//         } catch (err){
//           throw new ApolloError(err.message, 404)
//         }
        
    
//     }
  }
}
