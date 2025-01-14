const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: [true, 'Email already exists'],
        trim: true,
        
    },
    password: {
        type: String,
        required: [true, 'Please add a password'],
        minlength: [6, 'Password must be at least 6 characters'],
       

    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);
