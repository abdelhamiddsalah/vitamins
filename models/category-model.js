const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minlengthh: [3, 'Category name must be at least 3 characters'],
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    },
    image: {
        type: String,
    },
});

module.exports = mongoose.model('Category', categorySchema);