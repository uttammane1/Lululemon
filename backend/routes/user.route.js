const express = require("express");
const userRegistration = require("../controllers/user.controller");
const UserModel = require("../models/user.model");
const verifyEmailController = require("../controllers/verifyEmailController");
const loginController = require("../controllers/loginController");
const auth =  require('../middleware/auth.middleware');
const logoutController = require("../controllers/logoutController");
const uploadAvatar = require("../controllers/uploadImageAvatarController");
const upload = require("../middleware/multer.middleware");
const updateUserDetails = require("../controllers/updateUserDetailsController");
const forgotPasswordController = require("../controllers/forgotPassword.Controller");
const verifyForgotPasswordOtp = require("../controllers/verifyForgotPassword.controller");
const resetPassword = require("../controllers/resetPassword.controller");


const userRouter = express.Router();

userRouter.post('/register',userRegistration);
userRouter.post('/verify-email', verifyEmailController);
userRouter.post('/login',loginController);
userRouter.get('/logout', auth, logoutController);
userRouter.put('/upload-avatar', auth,upload.single('avatar'), uploadAvatar);
userRouter.put('/update-user', auth, updateUserDetails);
userRouter.put('/forgot-password', forgotPasswordController);
userRouter.put('/verify-forgot-password-otp', verifyForgotPasswordOtp);
userRouter.put('/reset-password', resetPassword);

module.exports = userRouter;
