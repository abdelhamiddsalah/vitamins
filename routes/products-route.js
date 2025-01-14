const express = require('express');
const router = express.Router();
const { productValidation } = require('../middleswares/products-validation');

const {

    createProductRoute,
    getProductRoute,
    getallproductsRoute,
    deleteProductRoute,
    updateProductRoute
} = require('../services/products-services');
const upload = require('../config/multer');


router.post('/',upload.single('image'), productValidation, createProductRoute);
router.get('/:id', getProductRoute);
router.get('/', getallproductsRoute);
router.delete('/:id', deleteProductRoute);
router.put('/:id', updateProductRoute);



module.exports = router;