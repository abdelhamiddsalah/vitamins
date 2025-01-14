const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user-model'); // تأكد من أن المسار صحيح
const Apierror = require('../utiels/api-error');
const nodemailer = require('nodemailer');



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
    const JWTkey = process.env.JWT_SECRET + user.password;
    const token = jwt.sign({ email: user.email, id: user._id }, JWTkey, { expiresIn: '10m' });

    // إنشاء رابط إعادة التعيين
    const link = `http://localhost:3000/api/auth/reset-password/${token}`;

    // ارسال الرابط عبر البريد الإلكتروني
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.USER_EMAIL,
            pass: process.env.USER_PASS,
        },
        tls: {
            rejectUnauthorized: false, // تخطي التحقق من الشهادة
        },
    });
    const mailOptions = {
        from: process.env.USER_EMAIL,
        to: user.email,
        subject: 'Reset Password',
        text: `Click the link below to reset your password: ${link}`,
    };
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

    // إرسال الرابط مباشرة في الرد
    res.status(200).json({
        status: 'success',
        message: 'Password reset link generated successfully',
        resetPasswordLink: link,
    });
});

/**
 * Reset Password
 * @route PATCH /api/auth/reset-password/:token
 * @access Public
 */
const resetPasswordRoute = asyncHandler(async (req, res, next) => {
    const { token } = req.params;
    const { password } = req.body;

    // فك تشفير رمز JWT والتحقق من صلاحيته
    let decoded;
    try {
        const user = await User.findById(decoded.id);
        const JWTkey = process.env.JWT_SECRET + user.password;
        decoded = jwt.verify(token, JWTkey);
    } catch (err) {
        return next(new Apierror('Invalid or expired token', 400));
    }

    // العثور على المستخدم
    const user = await User.findById(decoded.id);
    if (!user) {
        return next(new Apierror('User not found', 404));
    }

    // تحديث كلمة المرور
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    // إرسال الرد النهائي
    res.status(200).json({
        status: 'success',
        message: 'Password reset successfully',
    });
});

module.exports = {
    forgetPasswordRoute,
    resetPasswordRoute,
};
