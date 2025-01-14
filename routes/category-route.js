const express = require('express');
const router = express.Router();
const { categoryValidation } = require('../middleswares/category-validation');


const {
    createCategoryRoute,
    getCategoryRoute,
    updateCategoryRoute,
    deleteCategoryRoute,
    getCategoriesRoute
} = require('../services/category-services');

router.post('/', categoryValidation,  createCategoryRoute);
router.get('/:id', getCategoryRoute);
router.put('/:id', updateCategoryRoute);
router.delete('/:id', deleteCategoryRoute);
router.get('/', getCategoriesRoute);



module.exports = router;