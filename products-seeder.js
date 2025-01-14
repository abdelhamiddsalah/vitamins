const productsmodel = require('./models/products-model');
const productsdata = require('./data/products-data');
const dotenv = require('dotenv');
const connectDB = require('./config/database');

dotenv.config();

connectDB();


const seedProducts = async () => {
    try {
        await productsmodel.deleteMany({});
        await productsmodel.insertMany(productsdata);
        console.log('Products seeded successfully');
    } catch (error) {
        console.error('Error seeding products:', error);
    }
};

seedProducts();