
const mongoose = require('mongoose');
// const mongoURI = "mongodb://kevu_mandalik:Keval@123@cluster0-shard-00-00.aimsb.mongodb.net:27017,cluster0-shard-00-01.aimsb.mongodb.net:27017,cluster0-shard-00-02.aimsb.mongodb.net:27017/?ssl=true&replicaSet=atlas-k6dgnk-shard-0&authSource=admin&retryWrites=true&w=majority";
const mongoURI = 'mongodb+srv://kevu_mandalik:Keval%40123@cluster0.aimsb.mongodb.net/question?retryWrites=true&w=majority'
const connectToMongo = async()=>{
    await mongoose.connect(mongoURI,()=>{
        console.log('connection successfully')
    })
}

module.exports = connectToMongo;