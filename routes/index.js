const express = require('express')
const route = express.Router();
const getData = require('../db/data').getData;


route.get('/',(req,res)=>{
    getData(false).then((data)=>{
        res.send(data);
    }).catch((err)=>{
        res.send(err);
    });
    
});

route.get('/yesterday',(req,res)=>{
    getData(true).then((data)=>{
        res.send(data);
    }).catch((err)=>{
        res.send(err);
    });
})

module.exports = route;