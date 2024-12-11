const UserModel = require("../models/user.model");
const sendEmail = require("../config/sendEmail");
const bcrypt = require("bcrypt");
const verifyEmailTemplate = require("../utils/verifyEmailTemplate");
const generatedAccessToken = require("../utils/generatedAccessToken");
const generatedRefreshToken = require("../utils/generatedRefreshToken");
const uploadImageCloudinary = require("../utils/uploadImageCloudinary");
const generatedOtp = require("../utils/generatedOtp");
const forgotPasswordTemplate = require("../utils/forgotPasswordTemplate");

const resetPassword = async (req, res) => {
    try {
        const {email, newPassword, confirmPassword} = req.body

        if(!email || !newPassword || !confirmPassword){
           return res.status(400).json({
            message : "Provide required fields email, newPassword, confirmPassword"
           })
        }

        const user = await UserModel.findOne({ email })

        if(!user){
            return res.status(400).json({
                message: "Email is not available",
                error : true,
                success : false
            })
        }

        if(newPassword !== confirmPassword){
            return res.status(400).json({
                message : "newPassword and confirmPassword must be same.",
                error : true,
                succedd : false
            })
        }

        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(newPassword,salt)

        const update = await UserModel.findOneAndUpdate(user._id,{
            password : hashPassword
        })

        return resjson({
            message : "Password updated succesfully",
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

module.exports = resetPassword;
