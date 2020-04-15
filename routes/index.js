const express = require('express')
const route = express.Router();
// const getData = require('../db/data').getData;
const fs = require('fs');
route.get('/',(req,res)=>{

    // var data = require('../data.json').data;
    fs.readFile('data.json',(err,data)=>{
        if(err) console.log(err);
        res.send(JSON.parse(data).data);
    })
});

route.get('/yesterday',(req,res)=>{
    // getData(true).then((data)=>{
    //     res.send(data);
    // }).catch((err)=>{
    //     res.send(err);
    // });
    fs.readFile('dataYesterday.json',(err,data)=>{
        if(err) console.log(err);
        res.send(JSON.parse(data).data);
    })
})

module.exports = route;