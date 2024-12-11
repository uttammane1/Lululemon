const UserModel = require("../models/user.model");
const sendEmail = require("../config/sendEmail");
const bcrypt = require("bcrypt");
const verifyEmailTemplate = require("../utils/verifyEmailTemplate");
const generatedAccessToken = require("../utils/generatedAccessToken");
const generatedRefreshToken = require("../utils/generatedRefreshToken");
const uploadImageCloudinary = require("../utils/uploadImageCloudinary");
const generatedOtp = require("../utils/generatedOtp");
const forgotPasswordTemplate = require("../utils/forgotPasswordTemplate");

const forgotPasswordController = async (req, res) => {
    try {
        const { email } = req.body

        const user = await UserModel.findOne({email})

        if(!user){
            return res.status(400).json({
                message : "Email not available",
                error : true,
                success : false
            })
        }

        const otp = generatedOtp()
        const expireTime = new Date() + 60 * 60 * 1000  //1hr

        const update = await UserModel.findByIdAndUpdate(user._id,{
            forgot_password_otp : otp,
            forgot_password_expiry : new Date(expireTime).toISOString()

        })

        await sendEmail({
            sendTo : email,
            subject : "Forgot password from Myntra",
            html : forgotPasswordTemplate({
                name : user.name,
                otp: otp
            })

        })

        return res.json({
            message : "Check Your email",
            erorr : false,
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

module.exports = forgotPasswordController;
