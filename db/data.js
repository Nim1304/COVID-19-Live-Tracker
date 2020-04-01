const request= require('request');
const cheerio = require('cheerio');

const URL = 'https://www.worldometers.info/coronavirus/'

const keys = ["country", "totalCases", "newCases", "totalDeaths", "newDeaths", "totalRecovered",
    "activeCases", "serious", "casesPerMn", "deathsPerMn", "reportFirst"]


const getData = new Promise((resolve,reject) => {
    var endObject = []
    var intermediateObject = {}
    request(URL, (err, result, html) => {
        if (!err) { 
            const $ = cheerio.load(html);
            $("#main_table_countries_today").find('tr').each((i, trElement) => {
                intermediateObject = {}
                $(trElement).find('td').each((i, tdElement) => {
                    keys[i] == 'reportFirst' ? intermediateObject[keys[i]] = $(tdElement).text().replace('\n', '') :
                        intermediateObject[keys[i]] = $(tdElement).text();
                })
                endObject.push(intermediateObject);
            });
            endObject.length>0 ? resolve(endObject) : reject(new Error('Server Not responding.Try after some time'));
        }
    });
});


module.exports = {getData:getData}