const {validationResult} = require('express-validator');    
const Category = require('../models/category-model');
const asyncHandler = require('express-async-handler');
const Apierror = require('../utiels/api-error');


const createCategoryRoute = asyncHandler(async (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(new Apierror(errors.array()[0].msg, 400));
    }
    const category = await Category.create(req.body);
    if (!category) {
        return next(new Apierror("Category not created", 400));
    }
    res.status(201).json(category);
});


const getCategoryRoute = asyncHandler(async (req, res, next) => {
    const category = await Category.findById(req.params.id);
    if (!category) {
        return next(new Apierror("Category not found", 404));
    }
    res.status(200).json(category);
});

const updateCategoryRoute = asyncHandler(async (req, res, next) => {
    const category = await Category.findById(req.params.id);
    if (!category) {
        return next(new Apierror("Category not found", 404));
    }
    const updatedCategory = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedCategory);
});



const deleteCategoryRoute = asyncHandler(async (req, res, next) => {
    const category = await Category.findById(req.params.id);
    if (!category) {
        return next(new Apierror("Category not found", 404));
    }
    await Category.findByIdAndDelete(req.params.id);
    res.status(200).json({message: "Category deleted successfully"});
});



const getCategoriesRoute = asyncHandler(async (req, res, next) => {
    const categories = await Category.find();
    res.status(200).json(categories);
});



module.exports = {
    createCategoryRoute,
    getCategoryRoute,
    updateCategoryRoute,
    deleteCategoryRoute,
    getCategoriesRoute
};