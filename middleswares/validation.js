const { body } = require('express-validator');

// التحقق من البيانات عند التسجيل
const registerValidation = [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Invalid email format'),
    body('password').notEmpty().withMessage('Password is required')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
];

// التحقق من البيانات عند تسجيل الدخول
const loginValidation = [
    body('email').isEmail().withMessage('Invalid email format'),
    body('password').notEmpty().withMessage('Password is required'),
];

// التحقق من البيانات عند تحديث المستخدم
const updateValidation = [
    body('name').optional().notEmpty().withMessage('Name must not be empty'),
    body('email').optional().isEmail().withMessage('Invalid email format'),
];

module.exports = {
    registerValidation,
    loginValidation,
    updateValidation,
};
