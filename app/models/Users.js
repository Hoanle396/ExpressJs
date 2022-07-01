const mongoose = require('mongoose')
const Role = require('../../enums/role.enum')
const Schema = mongoose.Schema

const User = new Schema({

    username: {type:String},
    fullname: { type: String },
    birthday: { type: String },
    email: {type:String,unique:true},
    phone: {type:String},
    password: {type:String, required:true},
    address: { type: String },
    gender: { type: String },
    avatarURL: { type: String },
    role:{enum:['admin','user','broker']},
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('User', User)