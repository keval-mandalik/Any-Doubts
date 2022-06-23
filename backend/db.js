
const mongoose = require('mongoose');
require('dotenv').config();
const mongoURI = process.env.MONGO_URI;
const connectToMongo = async()=>{
    await mongoose.connect(mongoURI,()=>{
        console.log('connection successfully')
    })
}

module.exports = connectToMongo;