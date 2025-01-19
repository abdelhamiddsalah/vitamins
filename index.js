const express = require('express');
const dotenv = require('dotenv');
const { globalErrorHandler , routernotfound} = require('./middleswares/middlewarehhandling');
const connectDB = require('./config/database');
const helmet = require('helmet');
const cors = require('cors');

dotenv.config();
// Connect to MongoDB
connectDB();

// Middleware
const app = express();


app.set('views', 'D:/nodejsprojects/StoreApp/views');
app.set('view engine', 'ejs');

// تحديد مسار القوالب (إذا كانت الملفات داخل مجلد محدد مثل "views")



app.use(express.json());
app.use(helmet());
app.use(cors());
// Routes
const productsRoute = require('./routes/products-route');
const userRoute = require('./routes/user-route');
const authRoute = require('./routes/auth-route');
const categoryRoute = require('./routes/category-route');

app.use('/api/categories', categoryRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productsRoute);
app.use('/api/auth', authRoute);



/////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////


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
