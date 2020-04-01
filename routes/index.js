const express = require('express')
const route = express.Router();
const request= require('request');
const cheerio = require('cheerio');
const URL='https://www.worldometers.info/coronavirus/'

const keys = ["country","totalCases","newCases","totalDeaths","newDeaths","totalRecovered",
              "activeCases","serious","casesPerMn","deathsPerMn","reportFirst"]


route.get('/',(req,res)=>{
    var endObject = []
    request(URL,(err,result,html)=>{
        if(!err){
            const $=cheerio.load(html);
            $('tr').each((i,trElement)=>{
                $(trElement).find('td').each((i,tdElement)=>{
                    var intermediateObject = {  }
                    intermediateObject[keys[i]] = tdElement.text();
                })
                endObject.push(intermediateObject);
            })
            console.log(endObject);

        }
    })

    res.send(endObject).status(200);

});


module.exports = route;