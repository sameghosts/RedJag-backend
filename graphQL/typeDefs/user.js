// ====== User Type Defs
// Here are all the data type definitions related to user model that must be called to pass back and fourth between front end and backend for query's and mutations. See docs folder for associated query and mutation structure. 

// ==== gql dependency from ASE
const { gql } = require('apollo-server-express');

//TODO: Create Query's 
//TODO: Create mutations
const user = gql`

  #User type for user module base def
  type User {
    id: ID!
    email: String!
    username: String!
    firstName: String!
    lastName: String!
    profile: UserProfile
    jobJournal: JobJournal
    jobCollection: JobCollection
    todoCollection: TodoCollection
  }

  #Input schema for new user / registration
  input UserInput {
    email: String!
    username: String!
    firstName: String!
    lastName: String!
  }
  
  # Type auth user, for paylod to frontend
  type AuthUser {
    user: User!
    token: String!
  }

  # UserProfile type
  type UserProfile {
    userLocation: UserLocData,
    userIdentity: UserIdentityData,
    bio: String,
    education: [UserSchools]
  }

  # UserLocData Type
  type UserLocData {
    locationCity: String
    locationState: String
    locationAddress: String
    locationZip: Int
  }

  # UserIdentityData Type
  type UserIdentityData {
    jobTitle: String
    jobType: String
    jobLevel: String
    skills: SkillSet
    companyCulture: String
    employmentType: String
    payRange: String
    notes: String
  }

  #skillset type
  type SkillSet {
    hardSkills: [Skill]
    softSkills: [Skill]
    techStack: [Skill]
  }

  #skill type
  type Skill {
    skillType: String
    skillName: String
    yearsExperience: Int
    workExperience: Boolean
    notes: String
  }
  #UserSchool Type
  type userSchool {
    schoolName: String
    degree: String
    gradYear: Int
    honorsAwards: String
  }


`

module.exports = user;