const express = require('express');

const Index = require('./routes/index');

const app=express();



app.use('/',Index);




const PORT = 3000 || process.env.PORT
app.listen(PORT,()=>{
    console.log(`Started on port ${PORT}`);
});