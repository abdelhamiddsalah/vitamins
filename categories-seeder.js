const cateorymodel = require('./models/category-model');
const categoriesdata = require('./data/categories-data');
const dotenv = require('dotenv');
const connectDB = require('./config/database');

dotenv.config();

connectDB();

const seedCategories = async () => {
    try {
        await cateorymodel.deleteMany();
        const categories = await cateorymodel.insertMany(categoriesdata);
        console.log(categories);
        process.exit(0);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

seedCategories();