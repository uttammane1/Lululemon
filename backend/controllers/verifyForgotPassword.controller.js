const UserModel = require("../models/user.model");
const sendEmail = require("../config/sendEmail");
const bcrypt = require("bcrypt");
const verifyEmailTemplate = require("../utils/verifyEmailTemplate");
const generatedAccessToken = require("../utils/generatedAccessToken");
const generatedRefreshToken = require("../utils/generatedRefreshToken");
const uploadImageCloudinary = require("../utils/uploadImageCloudinary");
const generatedOtp = require("../utils/generatedOtp");
const forgotPasswordTemplate = require("../utils/forgotPasswordTemplate");

const verifyForgotPasswordOtp = async (req, res) => {
    try {
       const {email, otp} = req.body
       
       const user = await UserModel.findOne({email})
       
       if(!email || !otp){
        return res.status(400).json({
            message : "Provide required field email, otp.",
            error : true,
            success : false 
        })
       }

       if(!user){
        return res.status(400).json({
            message : "Email not available",
            error : true,
            success : false
        })
       }

       const currentTime = new Date().toISOString()

       if(user.forgot_password_expiry < currentTime){
        return res.status(400).json({
            message : "Otp is expired",
            error : true,
            success : false
        })
    }

    if(otp !== user.forgot_password_otp){
       return res.status(400).json({
        message : "Invalid otp",
        error : true,
        success : false
       })

    }

    //if otp is not expired
    //otp === user.forgot_password_otp

    return res.json({
        message : "Verify otp successfully",
        error : false,
        success : true
    })
        
    } catch (error) {
        return res.status(500).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }

}
module.exports = verifyForgotPasswordOtp;
