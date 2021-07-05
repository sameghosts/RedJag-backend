// ====== User Type Defs
// Here are all the data type definitions related to user model that must be called to pass back and fourth between front end and backend for query's and mutations. See docs folder for associated query and mutation structure. 


//TODO: Add back in journal collection and todo when written 
// ==== gql dependency from ASE
const { gql } = require('apollo-server-express');

const user = gql`
  type User {
      id: ID!
      email: String!
      username: String!
      firstName: String
      lastName: String
      profile: UserProfile
      jobJournal: Journal
      #jobCollection: JobCollection
      #todoCollection: TodoCollection
      createdAt: String
      updatedAt: String
    }
  # User Queries
  extend type Query {
#     #test
    test: String
#     #login
    loginUser(username: String!, password:String!):AuthUser!
#     #profile
#     # getUserProfile: (username: String!)

#     #here or elsewhere:
#       # User Journal, User Collection, UserTodo
  }

# # User Mutations
  extend type Mutation {
#   #Register new user
#     #### Auth loc this Eventually!!!!
  test: String
  registerUser(newUser: UserInput!): AuthUser!
  }   
  
  # Input schema for new user / registration
  input UserInput {
    email: String!
    username: String!
    firstName: String!
    lastName: String!
    password: String!
  }

# UserSchool Type
type UserSchool {
    schoolName: String
    degree: String
    gradYear: Int
    honorsAwards: String
  }
  
#   UserLocData Type
  type UserLocData {
    locationCity: String
    locationState: String
    locationAddress: String
    locationZip: Int
  }

#   skill type
  type Skill {
    skillType: String
    skillName: String
    yearsExperience: Int
    workExperience: Boolean
    notes: String
  }

#   skillset type
  type SkillSet {
    hardSkills: [Skill]
    softSkills: [Skill]
    techStack: [Skill]
  }

#   UserIdentityData Type
  type UserIdentityData {
    id: ID
    jobTitle: String
    jobType: String
    jobLevel: String
    skills: SkillSet
    companyCulture: String
    employmentType: String
    payRange: String
    notes: String
    createdAt: String
    updatedAt: String
  }
  

#   UserProfile type
  type UserProfile {
    id: ID
    userLocation: UserLocData
    userIdentity: UserIdentityData
    bio: String
    education: [UserSchool]
    createdAt: String
    updatedAt: String
  }
  
  # AuthUser Type, login and register payload return
  type AuthUser {
    user: User!
    token: String!
  }
`
module.exports = user;