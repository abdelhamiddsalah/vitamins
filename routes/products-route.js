const express = require('express');
const router = express.Router();
const { productValidation } = require('../middleswares/products-validation');

const {

    createProductRoute,
 
} = require('../services/products-services');


router.post('/', productValidation, createProductRoute);



module.exports = router;