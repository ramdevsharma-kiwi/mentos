const express = require('express');
const dotenv = require('dotenv')

const app = express();
dotenv.config()

const port = process.env.PORT ;

app.listen(port,function(err){
    if (err){
        console.log(`Error in running the server port: ${port}`)
    }
    console.log(`server is running on port: ${port}`)
})