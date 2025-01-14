const {body} = require('express-validator');

const categoryValidation = [
    body('name').notEmpty().withMessage('Category name is required'),
    body('image').isMongoId().withMessage('Image id is not valid'),
];

module.exports = {categoryValidation};