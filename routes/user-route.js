const express = require('express');
const router = express.Router();
const {  updateValidation } = require('../middleswares/validation');
const {verifyToken , verifyTokenAndAuthorization, verifyTokenAndAdmin} = require('../middleswares/verifytoken');

const {
   updateUserRoute,
   deleteUserRoute,
   getAllUsersRoute,
   getUserByIdRoute

} = require('../services/user-services');



router.put('/:id', verifyTokenAndAuthorization, updateValidation, updateUserRoute);
router.delete('/:id', verifyTokenAndAdmin, deleteUserRoute);
router.get('/', verifyTokenAndAdmin, getAllUsersRoute);
router.get('/:id', verifyTokenAndAdmin, getUserByIdRoute);


module.exports = router;