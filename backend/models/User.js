const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    questions:{
        type:[String],
        required : false
    },
    answers:{
        type:[String],
        required : false
    },
    picture: {
        type: String,
    }
})
const  User = mongoose.model('user',UserSchema);
module.exports = User;