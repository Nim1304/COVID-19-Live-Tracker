const express = require('express');
const cors = require('cors');
const path = require('path');
const Index = require('./routes/index');

const app=express();


app.use(cors());
app.use('/getData',Index);
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));
app.use(express.static('client/build'));
app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
});



const PORT = process.env.PORT || 3000 
app.listen(PORT,()=>{
    console.log(`Started on port ${PORT}`);
});