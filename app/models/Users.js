const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({

    firstName: {type:String},
    lastName: {type:String},
    email: {type:String,unique:true},
    phone: {type:String},
    password: {type:String, required:true},
    dateOfBirth: {type:Date},
    avatarURL: {type:String},
    createdAt: {type :Date,default:Date.now},
    updatedAt: {type:Date}
})

module.exports = mongoose.model('User', User)