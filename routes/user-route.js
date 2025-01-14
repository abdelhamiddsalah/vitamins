const express = require('express');
const router = express.Router();
const {  updateValidation } = require('../middleswares/validation');

const {
   updateUserRoute
} = require('../services/user-services');

router.put('/update', updateValidation, updateUserRoute);


module.exports = router;