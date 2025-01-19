const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user-model');
const nodemailer = require('nodemailer');
const Apierror = require('../utiels/api-error');

/**
 * Forget Password
 * @route POST /api/auth/forgot-password
 * @access Public
 */
const forgetPasswordRoute = asyncHandler(async (req, res, next) => {
    const { email } = req.body;

    // التحقق من صحة البريد الإلكتروني
    const user = await User.findOne({ email });
    if (!user) {
        return next(new Apierror('Email not found', 404));
    }

    // توليد رمز JWT مؤقت
    const token = jwt.sign({ email: user.email, id: user._id }, process.env.JWT_SECRET, { expiresIn: '10m' });

    // إنشاء رابط إعادة التعيين
    const link = `${process.env.LINK_VERCEL || 'https://vitaminss.vercel.app'}/api/auth/reset-password/${token}`;

    // ارسال الرابط عبر البريد الإلكتروني
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.USER_EMAIL,
            pass: process.env.USER_PASS,
        },
        tls: {
            rejectUnauthorized: false,
        },
    });

    const mailOptions = {
        from: process.env.USER_EMAIL,
        to: user.email,
        subject: 'Reset Password',
        text: `Click the link below to reset your password: ${link}`,
    };

    try {
        await transporter.sendMail(mailOptions);
    } catch (err) {
        return next(new Apierror('Failed to send reset password email', 500));
    }

    res.status(200).json({
        status: 'success',
        message: 'Password reset link sent successfully to your email.',
    });
});

/**
 * Get Reset Password Form
 * @route GET /api/auth/reset-password/:token
 * @access Public
 */
const getResetPasswordRoute = asyncHandler(async (req, res, next) => {
    const { token } = req.params;

    let decoded;
    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
        return next(new Apierror('Invalid or expired token', 400));
    }

    const user = await User.findById(decoded.id);
    if (!user) {
        return next(new Apierror('User not found', 404));
    }

    res.render('reset-password', { token });
});

/**
 * Reset Password
 * @route POST /api/auth/reset-password/:token
 * @access Public
 */
const resetPasswordRoute = asyncHandler(async (req, res, next) => {
    const { token } = req.params;
    const { password } = req.body;

    if (!password) {
        return next(new Apierror('Password is required', 400));
    }

    let decoded;
    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
        return next(new Apierror('Invalid or expired token', 400));
    }

    const user = await User.findById(decoded.id);
    if (!user) {
        return next(new Apierror('User not found', 404));
    }

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();

    res.status(200).json({
        status: 'success',
        message: 'Password reset successfully. Visit /api/auth/success-reset-password for confirmation.',
    });
});

/**
 * Success Reset Password
 * @route GET /api/auth/success-reset-password
 * @access Public
 */
const successResetPasswordRoute = asyncHandler(async (req, res, next) => {
    res.render('success-reset-password', { message: 'Password has been successfully reset. You can now log in with your new password.' });
});

module.exports = {
    forgetPasswordRoute,
    resetPasswordRoute,
    getResetPasswordRoute,
    successResetPasswordRoute,
};
