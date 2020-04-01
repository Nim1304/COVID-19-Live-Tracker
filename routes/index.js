const express = require('express')
const route = express.Router();
const getData = require('../db/data').getData;


route.get('/',(req,res)=>{
    getData.then((data)=>{
        res.send(data);
    }).catch((err)=>{
        res.send(err);
    });
    
});


module.exports = route;