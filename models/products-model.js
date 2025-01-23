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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    details: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Details',
        required: true
    },
    isDeal: {
        type: Boolean,
        ref: 'Deals',
        required: true
    }
});

module.exports = mongoose.model('Product', productSchema);