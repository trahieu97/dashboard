const mongoose = require('mongoose')
const Schema = mongoose.Schema
 
const productImageSchema = new Schema({
    alt: {type: String, required: true, trim: true, minlength: 2},
    url: {type: String, required: true, unique: true},
    productId: {type: Schema.Types.ObjectId, ref: 'Product'},
    createDate: {type: Date, default: Date.now},
    updateDate: {type: Date, default: Date.now},
    status: {type: String, enum: ['deleled', 'hidden', 'normal']},
});

module.exports = mongoose.model('ProductImage', productImageSchema)