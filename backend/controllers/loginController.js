const UserModel = require("../models/user.model");
const sendEmail = require("../config/sendEmail");
const bcrypt = require("bcrypt");
const verifyEmailTemplate = require("../utils/verifyEmailTemplate");
const generatedAccessToken = require("../utils/generatedAccessToken");
const generatedRefreshToken = require("../utils/generatedRefreshToken");


const loginController = async(req, res) => {
    try {
        const {email, password } = req.body

        if(!email || !password ){
            return res.status(400).json({
                message : "Provide email, password",
                error: true,
                success : false
            })
        }

        const user = await UserModel.findOne({email})

        if(!user){
            return res.status(400).json({
                message : "User not register",
                error: true,
                success: false
            })
        }

        if(user.status !== "Active"){
            return res.status(400).json({
                message : "Contact to Admin",
                error: true,
                success : false
            })
        }

        const checkPassword = await bcrypt.compare(password, user.password)
        
        if(!checkPassword){
            return res.status(400).json({
                message : "Check Your password",
                error: true,
                success : false
            })
        }

        const accessToken = await generatedAccessToken(user._id)
        const refreshToken = await generatedRefreshToken(user._id)

        // now i want to send the token inside user cookies

        const cookiesOption = {
            httpOnly : true,
            secure : true,
            sameSite : "None"
        }
        res.cookie('accessToken', accessToken,cookiesOption)
        res.cookie('refreshToken', refreshToken, cookiesOption)

        return res.json({
            message : "Login successfully",
            error : false,
            success : true,
            data : {
                accessToken,
                refreshToken
            }

        })

        
    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error : true,
            success : false
        })

    }
}
module.exports = loginController;
