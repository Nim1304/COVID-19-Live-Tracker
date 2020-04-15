const express = require('express')
const route = express.Router();
// const getData = require('../db/data').getData;

route.get('/',(req,res)=>{
    const data = require('../data.json').data;
    res.send(data);
});

route.get('/yesterday',(req,res)=>{
    // getData(true).then((data)=>{
    //     res.send(data);
    // }).catch((err)=>{
    //     res.send(err);
    // });
    const dataYes = require('../dataYesterday.json').data;
    res.send(dataYes);
})

module.exports = route;