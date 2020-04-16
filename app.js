const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const Index = require('./routes/index');
const getData = require('./db/data').getData;
const app=express();


app.use(cors());
app.use('/getData',Index);
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));
// app.use(express.static(__dirname));
app.use(express.static('client/build'));
app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
});

getData(false).then((data) => {
    // console.log(data.data[1]);
    fs.writeFile('./data.json', JSON.stringify(data), (err) => {
        if (err) throw err;
        console.log('awrittens');
    });
}).catch(err => console.log(err));

getData(true).then((data) => {
    // console.log(data.data[1]);
    fs.writeFile('./dataYesterday.json', JSON.stringify(data), (err) => {
        if (err) throw err;
        console.log('writtens');
    });
}).catch(err => console.log(err));

setInterval(() => {
    getData(false).then((data) => {
        // console.log(data.data[1]);
        fs.writeFile('./data.json', JSON.stringify(data), (err) => {
            if (err) throw err;
            console.log('awritten');
        });
    }).catch(err => console.log(err));
}, 60000);

setInterval(() => {
    getData(true).then((data) => {
        //console.log(data);
        fs.writeFile('./dataYesterday.json', JSON.stringify(data), (err) => {
            if (err) throw err;
            console.log('written');
        });
    }).catch(err => console.log(err));
}, 60000);

const PORT = process.env.PORT || 3000 
app.listen(PORT,()=>{
    console.log(`Started on port ${PORT}`);
});