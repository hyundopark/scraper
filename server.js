const express = require("express");
const path = require('path')
const app = express();
const request=require('request')
const fs = require('fs')
const port = 1986;
const cheerio=require('cheerio')

const url = "https://www.indeed.com/cmp/BlindsGalore.com/jobs/Product-Data-Content-Administrator-3a72e18227fdcb74?sjdu=QwrRXKrqZ3CNX5W-O9jEvTHK_qwVIn-tz6nDN_ABFtujb0gCEYRoEy8MtnBPscfE9cE04YH2-WvQ38bEhmLOg6Mh8z77mNBW0aMS9GOSHfIg7hI51XA1PJqkVkvMG8mi&tk=1cd8dlnplb94ob8v&vjs=3"

request(url, function(err,resp,body){
    let $=cheerio.load(body);
    let companyName = $('.company');
    let companyNameText = companyName.text()
    console.log(companyNameText);
})

app.listen(port);
console.log('server running on ' +port)