const express = require('express');
const router = express.Router();
const { productValidation } = require('../middleswares/products-validation');

const {

    createProductRoute,
    getProductRoute,
    getallproductsRoute
} = require('../services/products-services');
const upload = require('../config/multer');


router.post('/',upload.single('image'), productValidation, createProductRoute);
router.get('/:id', getProductRoute);
router.get('/', getallproductsRoute);



module.exports = router;