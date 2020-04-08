const express = require('express');
const cors = require('cors');
const Index = require('./routes/index');

const app=express();


app.use(cors());
app.use('/',Index);
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}))



const PORT = process.env.PORT || 3000 
app.listen(PORT,()=>{
    console.log(`Started on port ${PORT}`);
});