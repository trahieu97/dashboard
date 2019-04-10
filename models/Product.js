const mongoose = require('mongoose')
const Schema = mongoose.Schema
 
const productSchema = new Schema({
    name: {type: String, required: true, trim: true, minlength: 2},
    path: {type: String, required: true, unique: true},
    image: {type: Map, required: true, trim: true},
    rattings: {type: Array},
    images: {type: Array},
    detail: {type: Array},
    price: {type: Number, required: true},
    saleOff: {type: Number, required: true},
    salePrice: {type: Number, required: true},
    _productType: [{type: Schema.Types.ObjectId, ref: 'ProductType'}],
    _unit: [{type: Schema.Types.ObjectId, ref: 'ProductUnit'}],
    createDate: {type: Date, default: Date.now},
    updateDate: {type: Date, default: Date.now},
    status: {type: String, enum: ['deleled', 'hidden', 'normal']},
});
 
module.exports = mongoose.model('Product', productSchema)