// Dependencies

const mongoose =require('mongoose');

// Instantiate Schema
const Schema = mongoose.Schema;

//Optionss
const options = {
  timestamps: true
}

//Reminder subSchema
const reminderSchema = new Schema ({
  remindType: String,
  remindDate: {
    type: Date,
    default: Date.now()
  }
})

// Note subSchema
const noteSchema = new Schema ({
  noteName: String,
  noteBody: String,
  noteDate: {
    type: Date,
    default: Date.now()
  }
})


//Contact sub-subSchema
const contactSchema = new Schema ({
  contactName: String,
  contactPostition: String,
  contactNumber: Number,
  contactEmail: String,
  contactLinkedIn: String,
  contactNotes: [noteSchema],
  contactReminders: [reminderSchema]
})

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
  isActive: {
    type: Boolean,
    default: true
  },
  endResult: {
    type: String,
    enum: ['pending', 'no', 'yes', 'maybe']
  },
  contacts: [contactSchema],
  entryReminders: [reminderSchema],
  entryNotes: [noteSchema]
}, options)

//Journal Schema
const journalSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }, 
  userEmail: String,
  journalEntries: [jobEntrySchema]
}, options)
//export
module.exports = mongoose.model('JobJournal', journalSchema)