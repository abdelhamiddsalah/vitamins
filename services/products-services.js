const express = require('express');
const {validationResult} = require('express-validator');    
const Product = require('../models/products-model');
const asyncHandler = require('express-async-handler');
const Apierror = require('../utiels/api-error');





const createProductRoute = asyncHandler(async (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(new Apierror(errors.array()[0].msg, 400));
    }
    const product = await Product.create(req.body);
    if (!product) {
        return next(new Apierror("Product not created", 400));
    }
    res.status(201).json(product);
});






module.exports = {
    
    createProductRoute,
    
};