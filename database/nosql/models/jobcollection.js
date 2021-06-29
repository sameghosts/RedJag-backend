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
  via: String,
  detectedExtensions: {
    postedAt: String,
    scheduleType: String
  },
  jobApiId: String, 
  description: String
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
  lastJobSearchCache: [jobPostingSchema],
  fullSearchCache: [jobPostingSchema],
  savedJobs: [jobPostingSchema],
  appliedJobs: [jobPostingSchema],
})
//export
module.exports = mongooose.model('JobCollection', jobCollectionSchema)