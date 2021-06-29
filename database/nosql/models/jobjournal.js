// Dependencies

const mongoose =require('mongoose');

// Instantiate Schema
const Schema = mongoose.Schema;

//Options
const options = {
  timestamps: true
}
//Entry Subschema
const jobEntrySchema = new Schema({
  jobTitle: String,
  jobId: String,
  jobUrl: String,
  company: String,
  position: String,
  location: String,
  applicationUrl: String,
  applicationPlatform: String, 
  isActive: Boolean,
  endResult: {
    type: String,
    enum: ['pending', 'no', 'yes', 'maybe']
  }


})
//Journal Schema
const journalSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }, 
  userEmail: String,
  journalEntries: [jobEntrySchema]
})
//export
module.exports = mongoose.model('JobJournal', journalSchema)