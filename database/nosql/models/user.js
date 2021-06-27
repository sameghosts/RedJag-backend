// Dependencies

const mongoose =require('mongoose');

// Instantiate Schema
const Schema = mongoose.Schema;

const options = {
  timestamps: true
}

//Profile SubSchema
const userProfile = new Schema({

});
//User Schema
const userSchema = newSchema({

}, options)

// exports
module.exports = mongoose.model('User', userSchema)