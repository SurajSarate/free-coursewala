require('dotenv').config();
const mongoose = require('mongoose');
const mongoURI = process.env.MY_APP_API;

const connectToMongo = ()=>{
    mongoose.connect(mongoURI,{
        useNewUrlParser: true, useUnifiedTopology: true
    }).then(()=>{
        console.log("Connected To Mongo");
    }).catch((err)=>console.log("Not Connected"));
}

module.exports = connectToMongo;