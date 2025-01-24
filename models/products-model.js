const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    category: {
        type: String,
        ref: 'Category',
        required: true
    },
    details: {
        type: String,
        required: true
    },
    isDeal: {
        type: Boolean,
    }
});

module.exports = mongoose.model('Product', productSchema);