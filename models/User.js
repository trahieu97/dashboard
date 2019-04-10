const mongoose = require('mongoose')
const Schema = mongoose.Schema
 
const userSchema = new Schema({
    name: {type: String, required: true, trim: true},
    email: {type: String, required: true, trim: true},
    phone: {type: String, required: true, trim: true},
    password: {type: String, required: true, trim: true},
    avatar: {type: String, required: true, trim: true},
    province: {type: String, required: false},
    district: {type: String, required: false},
    ward: {type: String, required: false},
    address: {type: String, required: false},
    point: {type: Number, required: false, default: 0},
    createDate: {type: Date, default: Date.now},
    updateDate: {type: Date, default: Date.now},
    deleteDate: {type: Date, default: null},
    status: {type: String, enum: ['block', 'deleled', 'normal']},
});
 
module.exports = mongoose.model('User', userSchema)