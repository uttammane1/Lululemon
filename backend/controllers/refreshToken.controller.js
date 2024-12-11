const UserModel = require("../models/user.model");
const sendEmail = require("../config/sendEmail");
const bcrypt = require("bcrypt");
const verifyEmailTemplate = require("../utils/verifyEmailTemplate");
const generatedAccessToken = require("../utils/generatedAccessToken");
const generatedRefreshToken = require("../utils/generatedRefreshToken");
const uploadImageCloudinary = require("../utils/uploadImageCloudinary");
const jwt = require("jsonwebtoken");

const refreshToken = async (req, res) => {
    try {
      const refreshToken = req.cookies.refreshToken  || req?.header?.authorization?.split("")[1]
      if(!refreshToken){
        return res.status(401).json({
            message : "Invalid Token",
            error : true,
            success : false
        })
      }

      const verifyToken = await jwt.verify(refreshToken, 
        process.env.SECRET_KEY_REFRESH_TOKEN)
       
        if(!verifyToken){
            return res.status(401).json({
                message : "Token is expired",
                error : true,
                success : false
            })
        }
         const userId = verifyToken?._id

        const newAccessToken = await generatedAccessToken(userId)

        res.cookie('accessToken',newAccessToken,cookiesOption)

        return res.json({
            message : "New Access token generated",
            error: false,
            success: true,
            data : {
                accessToken : newAccessToken
            }
        })


        
    } catch (error) {
        return res.status(500).json({
            message : error.message || error,
            error : true,
            success : false
        })

    }

}
