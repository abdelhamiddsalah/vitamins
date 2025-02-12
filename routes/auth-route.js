const express = require('express');
const router = express.Router();
const { registerValidation, loginValidation } = require('../middleswares/validation');

const {
    registerUserRoute,
    loginUserRoute,

} = require('../services/auth-services');  


const {forgetPasswordRoute, resetPasswordRoute,getResetPasswordRoute} = require('../services/passwords-services');

router.post('/register', registerValidation, registerUserRoute);
router.post('/login', loginValidation, loginUserRoute);
router.post('/forgot-password', forgetPasswordRoute);
router.post('/reset-password/:token', resetPasswordRoute);
router.get('/reset-password/:token', getResetPasswordRoute);



module.exports = router;
