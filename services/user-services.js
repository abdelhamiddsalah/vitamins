const {validationResult} = require('express-validator');
const User = require('../models/user-model');
const asyncHandler = require('express-async-handler');
const Apierror = require('../utiels/api-error');





// update user

const updateUserRoute = asyncHandler(async (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(new Apierror(errors.array()[0].msg, 400));
    }
    
    const user = await User.findById(req.params.id);
    if (!user) {
        return next(new Apierror("User not found", 404));
    }
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedUser);
});




module.exports = {
    updateUserRoute
};