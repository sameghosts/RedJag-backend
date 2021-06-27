// Dependencies
const { UniqueOperationNamesRule } = require('graphql');
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

}, UniqueOperationNamesRule)

// exports
module.exports = mongoose.model('User', userSchema)