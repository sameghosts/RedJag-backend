// Dependencies

const mongoose =require('mongoose');

// Instantiate Schema
const Schema = mongoose.Schema;

const options = {
  timestamps: true
}

//education subschema
const userSchoolsSchema = new Schema({
  schoolName: String,
  degree: String,
  gradYear: Number,
  honorsAwards: String
})


//Profile SubSchema
const userProfileSchema = new Schema({
  userLocation: {
    locationCity: String,
    locationState: String,
    locationAddress: String,
    locationZip: Number
  },
  userIdentity: {
    jobTitle: String,
    jobType: String,
    jobLevel: String,
    hardSkills: [String],
    softSkills: [String],
    companyCulture: String,
    techStack: [String],
    employmentType: String,
    payRange: String,
    notes: String
  },
  bio: String,
  education: [userSchoolsSchema]

});
//User Schema
const userSchema = newSchema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  firstName: {
    type: String,
    required: true
  },
  LastName: {
    type: String,
    required: true
  }, 
  password: {
    type: String,
    required: true
  }, 
  profile: [userProfileSchema],
  jobJournal: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'JobJournal'
  }],
  jobCollection: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'JobCollection',
  }],
  todoCollection: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TodoCollection'
  }]
}, options)

// exports
module.exports = mongoose.model('User', userSchema)