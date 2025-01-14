const { validationResult } = require('express-validator');
const User = require('../models/user-model');
const asyncHandler = require('express-async-handler');
const Apierror = require('../utiels/api-error');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Function to generate JWT token
const generateToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

/**
 * Register User
 * @route POST /api/auth/register
 * @access Public
 */
const registerUserRoute = asyncHandler(async (req, res, next) => {
    // Validate request body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(new Apierror(errors.array()[0].msg, 400));
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);

    // Create user
    const user = await User.create(req.body);
    if (!user) {
        return next(new Apierror('Failed to create user', 400));
    }



    // Generate token and send response
    const token = generateToken(user._id);
    const { password, ...userDetails } = user._doc;
    res.status(201).json({ ...userDetails, token});
});

/**
 * Login User
 * @route POST /api/auth/login
 * @access Public
 */
const loginUserRoute = asyncHandler(async (req, res, next) => {
    // Validate request body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(new Apierror(errors.array()[0].msg, 400));
    }

    // Find user by email
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return next(new Apierror('Invalid email', 401));
    }

    // Check password
    const isPasswordMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isPasswordMatch) {
        return next(new Apierror('Invalid password', 401));
    }

    // Generate token and send response
    const token = generateToken(user._id);
    const { password, ...userDetails } = user._doc;
    res.status(200).json({ ...userDetails, token });
});

module.exports = {
    registerUserRoute,
    loginUserRoute,
};
