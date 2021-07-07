//TODO: import dependencies 
//TODO: Set up serpi call
//TODO: Write to file
//TODO: add Axios call for pushing data
// Dependencies
  // fs, axios, serpi
const fs = require('fs')
const axios = require('axios')

//var for data storage and array pass
const tempArr = []

const SerpApi = require('google-search-results-nodejs');
const search = new SerpApi.GoogleSearch(`${process.env.SERPI_KEY}`);

const params = {
  engine: "google_jobs",
  q: "junior software engineer",
  hl: "en"
};

const jsonReader = (filepath, cb) =>{
  
}

const callback = function(data) {
  console.log(data['jobs_results']);
  
  

  console.log(resultsString)
};

// Show result as JSON
search.json(params, callback);
