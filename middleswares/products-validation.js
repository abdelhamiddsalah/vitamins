const {body} = require('express-validator');

const productValidation = [
    body('name').notEmpty().withMessage('Product name is required'),
    body('price').isNumeric().withMessage('Product price must be a number'),
   // body('category').isMongoId().withMessage('Category id is not valid'),
   // body('quantity').isNumeric().withMessage('Product quantity must be a number'),
   // body('color').isMongoId().withMessage('Color id is not valid'),
   // body('size').isMongoId().withMessage('Size id is not valid'),
   // body('description').isMongoId().withMessage('Description id is not valid'),
   // body('image').isMongoId().withMessage('Image id is not valid'),
];

module.exports = {productValidation};