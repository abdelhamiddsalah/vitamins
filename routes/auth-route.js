const express = require('express');
const router = express.Router();
const { registerValidation, loginValidation } = require('../middleswares/validation');

const {
    registerUserRoute,
    loginUserRoute
} = require('../services/auth-services');    

router.post('/register', registerValidation, registerUserRoute);
router.post('/login', loginValidation, loginUserRoute);


module.exports = router;