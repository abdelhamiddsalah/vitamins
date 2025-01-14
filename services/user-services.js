const {validationResult} = require('express-validator');
const User = require('../models/user-model');
const asyncHandler = require('express-async-handler');
const Apierror = require('../utiels/api-error');

/*
 * Update User
 * @route PUT /api/users/:id
 * @access Private
 */

const updateUserRoute = asyncHandler(async (req, res, next) => {

    if (req.user.id !== req.params.id ) {
        return next(new Apierror('You are not authorized to update this user', 403));
    } 

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(new Apierror(errors.array()[0].msg, 400));
    }


    if(req.body.password){
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    
    const user = await User.findById(req.params.id);
    if (!user) {
        return next(new Apierror("User not found", 404));
    }

    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true }).select('-password');
    res.status(200).json(updatedUser);
});

/**
 * get all users
 * @route GET /api/users
 * @access Private
 */

 const getAllUsersRoute = asyncHandler(async (req, res, next) => {
    const users = await User.find().select('-password');
    res.status(200).json(users);
});


/*
 * Delete User
 * @route DELETE /api/users/:id
 * @access Private
 */

const deleteUserRoute = asyncHandler(async (req, res, next) => {
    // تأكد من أن المستخدم لديه دور "Admin"
    if (req.user.role !== 'admin') {
        return next(new Apierror('You are not authorized to delete this user', 403));
    }

    // تحقق إذا كان المستخدم موجودًا
    const user = await User.findById(req.params.id);
    if (!user) {
        return next(new Apierror("User not found", 404));
    }

    // حذف المستخدم
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "User deleted successfully" });
});

     /**
      * get user by id
      * @route GET /api/users/:id
      * @access Private
      */

     const getUserByIdRoute = asyncHandler(async (req, res, next) => {
        const user = await User.findById(req.params.id).select('-password');
        if (!user) {
            return next(new Apierror("User not found", 404));
        }
        res.status(200).json(user);
    });


module.exports = {
    updateUserRoute,
    deleteUserRoute,
    getAllUsersRoute,
    getUserByIdRoute
};