const express = require("express");
const path = require('path')
const app = express();
const request=require('request')
const fs = require('fs')
const port = 1986;
const cheerio=require('cheerio')

const url = "URL goes here"

request(url, function(err,resp,body){
    let $=cheerio.load(body);
    //add class or id like jQuery.. below
    let companyName = $('.company');
    let companyNameText = companyName.text()
    console.log(companyNameText);
})

app.listen(port);
console.log('server running on ' +port)