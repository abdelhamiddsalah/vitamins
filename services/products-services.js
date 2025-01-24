const { validationResult } = require('express-validator');
const Product = require('../models/products-model');
const asyncHandler = require('express-async-handler');
const Apierror = require('../utiels/api-error');
const { image } = require('../config/cloudinaryConfig');

// إنشاء منتج جديد
const createProductRoute = asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(new Apierror(errors.array()[0].msg, 400));
    }

    const product = await Product.create({
        ...req.body,
        image: req.file.path
    });

    if (!product) {
        return next(new Apierror("Product not created", 400));
    }

    res.status(201).json(product);
});

// الحصول على منتج حسب ID
const getProductRoute = asyncHandler(async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        return next(new Apierror("Product not found", 404));
    }
    res.status(200).json(product);
});

// الحصول على جميع المنتجات مع فلترة حسب `isDeal` و `category`
const getallproductsRoute = asyncHandler(async (req, res, next) => {
    const { isDeal, category } = req.query;  // استلام category من query
    const filter = {};

    // فلترة حسب isDeal إذا كانت موجودة
    if (isDeal !== undefined) {
        filter.isDeal = isDeal === 'true'; // تحويل القيمة إلى Boolean
    }

    // فلترة حسب category إذا كانت موجودة
    if (category) {
        filter.category = category;  // إضافة فلترة حسب category
    }

    const products = await Product.find(filter);
    if (!products || products.length === 0) {
        return next(new Apierror("Products not found", 404));
    }
    res.status(200).json(products);
});

// حذف منتج حسب ID
const deleteProductRoute = asyncHandler(async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        return next(new Apierror("Product not found", 404));
    }
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Product deleted successfully" });
});

// تحديث منتج حسب ID
const updateProductRoute = asyncHandler(async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        return next(new Apierror("Product not found", 404));
    }
    await Product.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: "Product updated successfully" });
});

module.exports = {
    createProductRoute,
    getProductRoute,
    getallproductsRoute,
    deleteProductRoute,
    updateProductRoute
};
