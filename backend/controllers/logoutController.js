const UserModel = require("../models/user.model");
const sendEmail = require("../config/sendEmail");
const bcrypt = require("bcrypt");
const verifyEmailTemplate = require("../utils/verifyEmailTemplate");
const generatedAccessToken = require("../utils/generatedAccessToken");
const generatedRefreshToken = require("../utils/generatedRefreshToken");


const loginController = async(req, res) => {
    try {
        const userid = req.userId //middleware

        const cookiesOption = {
            httpOnly : true,
            secure : true,
            sameSite : "None"
        }

        res.clearCookie("accessToken",cookiesOption)
        res.clearCookie("refreshToken",cookiesOption)

        const removeRefreshToken = await UserModel.findByIdAndUpdate(userid,{
            refresh_token : ""
        })

        return res.json({
            message : "Logout Successfully",
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

module.exports = loginController;
