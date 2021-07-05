require('dotenv').config()
const MONGOOSE = require('mongoose')


console.log(process.env.PORT, '🚨🚨🚨🚨🚨🚨');
//connection
MONGOOSE.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

MONGOOSE.set('returnOriginal', false)

//console log on open
MONGOOSE.connection.once('open', () =>{
    console.log(`🔗 connected to db: ${MONGOOSE.connection.name}`)
})

//console log on error
MONGOOSE.connection.on('error', err => console.log(`❌ Connection failed`, err))

//TODO: export JobJournal, JobCollection, Todo when complete

module.exports.User = require('./user')
module.exports.JobJournal = require('./jobjournal')
module.exports.JobCollection = require('./jobcollection')