//TODO: import dependencies 
//TODO: Set up serpi call
//TODO: Write to file
//TODO: add Axios call for pushing data
// Dependencies
  // fs, axios, serpi

const fs = require('fs')
const axios = require('axios')
require('dotenv').config();

//var for data storage and array pass
const tempArr = []
const apiURI = process.env.SERPI_KEY
const SerpApi = require('google-search-results-nodejs');
const search = new SerpApi.GoogleSearch();


const params = {
  engine: "google_jobs",
  google_domain: "google.com",
  q: "user research, austin texas"
};

const jsonReader = (filePath, cb) =>{
  fs.readFile(filePath, (err, fileData) =>{
    if (err) {
      return cb && cb(err)
    }
    try {
      const object = JSON.parse(fileData)
      return cb && cb(null, object)
    } catch (err) {
      return cb && cb(err)
    }
  })
}

const callbackRnW = function(data) {
  // console.log(data['jobs_results']);
  jsonReader('../data/test.json', (err, jobs_results)=>{
    if (err){
      console.log('Error reading file:', err)
    }
    console.log(jobs_results)
    //destructure add to doc 
      tempArr = [...jobs_results, ...data['jobs_results']]
      // dummy_data['jobs_results'] = [...tempArr]
      jobs_results = [...tempArr]
    fs.writeFile('../data/faveJobs.json', JSON.stringify(dummy_data), (err) => {
      if (err) console.log('Error writing file:', err)
  })
  console.log(jobs_results)
})
}

const callback = (data) => {
  console.log(data)
  fs.writeFile('../data/test.json', JSON.stringify(data['jobs_results']), (err) => {
    if (err) console.log('Error writing file:', err)
})
}


// Show result as JSON
search.json(params, callback);