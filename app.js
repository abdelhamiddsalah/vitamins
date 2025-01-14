const express = require('express');
const dotenv = require('dotenv');
const Apierror = require('./utiels/api-error');
const { globalErrorHandler , routernotfound} = require('./middleswares/middlewarehhandling');
const connectDB = require('./config/database');

dotenv.config();
// Connect to MongoDB
connectDB();

// Middleware
const app = express();
app.use(express.json());

// Routes
const productsRoute = require('./routes/products-route');
const userRoute = require('./routes/user-route');
const authRoute = require('./routes/auth-route');
app.use('/api/users', userRoute);
app.use('/api/products', productsRoute);
app.use('/api/auth', authRoute);


app.all("*",routernotfound);

// Error handling by using middleware
app.use(globalErrorHandler);



const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`1Server started on port ${port}`);
});

process.on('unhandledRejection', (err) => {
    console.error(err);
    process.exit(1);
});
