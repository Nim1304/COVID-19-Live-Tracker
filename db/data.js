const request = require('request');
const cheerio = require('cheerio');

const URL = 'https://www.worldometers.info/coronavirus/'

const keys = ["no","country", "totalCases", "newCases", "totalDeaths", "newDeaths", "totalRecovered",
    "activeCases", "serious", "casesPerMn", "deathsPerMn", "totalTests","testsPerMn","population"]


const getData = (yesterday) => {
    var decider;
    yesterday ? decider = "#main_table_countries_yesterday" : decider = "#main_table_countries_today";
    return new Promise((resolve, reject) => {
        var endObject = {data:[]}
        var intermediateObject = {}
        request(URL, (err, result, html) => {
            if (!err) {
                const $ = cheerio.load(html);
                $('.row_continent').each((i,element)=>{
                    $(element).remove();
                });
                $(decider).find('tr').each((i, trElement) => {
                    intermediateObject = {}
                    $(trElement).find('td').each((i, tdElement) => {
                        keys[i] == 'totalDeaths' ? intermediateObject[keys[i]] = $(tdElement).text().replace(/ /g, '') :
                            intermediateObject[keys[i]] = $(tdElement).text();
                    })
                    endObject['data'].push(intermediateObject);
                    // console.log(typeof endObject);
                });
                endObject.data.length > 0 ? resolve(endObject) : reject(new Error('Server Not responding.Try after some time'));
            }
        });
    });
}


module.exports = { getData: getData }