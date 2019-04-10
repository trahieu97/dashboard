const mongoose = require('mongoose')
const Schema = mongoose.Schema
 
const productUnitSchema = new Schema({
    name: {type: String, required: true, trim: true, minlength: 2},
    minUnit: {type: Number, required: true, unique: true},
    _product: [{type: Schema.Types.ObjectId, ref: 'Product'}],
    createDate: {type: Date, default: Date.now},
    updateDate: {type: Date, default: Date.now},
    status: {type: String, enum: ['deleted', 'hidden', 'normal']},
});
 
module.exports = mongoose.model('ProductUnit', productUnitSchema)