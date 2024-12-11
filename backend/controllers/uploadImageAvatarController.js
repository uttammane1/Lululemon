const UserModel = require("../models/user.model");
const sendEmail = require("../config/sendEmail");
const bcrypt = require("bcrypt");
const verifyEmailTemplate = require("../utils/verifyEmailTemplate");
const generatedAccessToken = require("../utils/generatedAccessToken");
const generatedRefreshToken = require("../utils/generatedRefreshToken");
const uploadImageCloudinary = require("../utils/uploadImageCloudinary");


const uploadAvatar = async (req, res) => {
    try {

        const userId = req.userId //auth middleware
        const image = req.file //multer middleware

        const upload = await uploadImageCloudinary(image)

        const updateUser = await UserModel.findByIdAndUpdate(userId,{
            avatar : upload.url
        })
        
        // console.log("image",image)

        return res.json({
            message : "Upload Profile",
            data : {
                _id : userId,
                avatar : upload.url
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

module.exports = uploadAvatar;
