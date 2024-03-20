const mongoose = require('mongoose')
const Schema = mongoose.Schema

const clubSchema = new Schema({
    email: {type:String, required:true},
    name: {type:String, required:true},
    shortMsg: {type:String, required:true},
    longMsg: {type:String, required:true},
    deadline: {type:String, required:true},
    entryDate: {type:Date, default:Date.now}
})

const userSchema = new Schema({
    name: {type:String, required:true},
    email: {type:String, required:true},
    password: {type:String, required:true},
    type: {type:String, required:true},
    entryDate: {type:Date, default:Date.now}
})

const signinSchema = new Schema({
    email: {type:String, required:true},
    entryDate: {type:Date, default:Date.now}
})

const Clubs = mongoose.model('Clubs', clubSchema, 'clubs')
const Users = mongoose.model('Users', userSchema, 'users')
const Signin = mongoose.model('Signin', signinSchema, 'signin')
const mySchemas = {'Clubs':Clubs, 'Users':Users, 'Signin':Signin}

module.exports = mySchemas
