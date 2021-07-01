// Dependencies

const mongoose =require('mongoose');

// Instantiate Schema
const Schema = mongoose.Schema;

//Options
const options = {
  timestamps: true
}

//JobPosting Subschema
const jobPostingSchema = new Schema ({
  title: {
    type: String,
    required: true
  },
  companyName: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    require: true
  },
  via: String,
  description: String,
  detectedExtensions: {
    postedAt: String,
    scheduleType: String,
    workFromHome: String
  },
  jobApiId: String, 
  applicationUrl: String,
  jobURI: String,
  companyURI: String,

})

const dataSetNLP = new Schema({
  setName: String,
  setDate: {
    type: Date,
    default: Date.now()
  },
  analysisType: String,
  collectionSize: Number,
  collectionTimeline: String,
  cacheUserIdent: Array,
  jobSet: [jobPostingSchema]
  
})
const resultSetNLP = new Schema({
  analysisType: String,
  analysisDate: {
    type: Date,
    default: Date.now()
  },
  nlpImgURI: String,
  nlpSingle: [String],
  nlpDouble: [String],
  nlpTripple: [String]
})
//Collection Schema
const jobCollectionSchema = new Schema ({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  userEmail: {
    type: String,
    required: true
  },
  recentCache10: [jobPostingSchema],
  recentCache60: [jobPostingSchema],
  fullSearchCache: [jobPostingSchema],
  faveJobs: [jobPostingSchema],
  appliedJobs: [jobPostingSchema],
  dataSeshNLP: [dataSetNLP],
  resultsNLP: [resultSetNLP]
})
//export
module.exports = mongoose.model('JobCollection', jobCollectionSchema)