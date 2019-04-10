const mongoose = require('mongoose')
const Schema = mongoose.Schema
 
const productDetailSchema = new Schema({
    name: {type: String, required: true, trim: true, minlength: 2},
    value: {type: String, required: true, unique: true},
    _product: {type: Schema.Types.ObjectId, ref: 'Product'},
    createDate: {type: Date, default: Date.now},
    updateDate: {type: Date, default: Date.now},
    status: {type: String, enum: ['deleled', 'hidden', 'normal']},
});
 
module.exports = mongoose.model('ProductDetail', productDetailSchema)