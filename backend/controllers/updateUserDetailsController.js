const UserModel = require("../models/user.model");
const sendEmail = require("../config/sendEmail");
const bcrypt = require("bcrypt");
const verifyEmailTemplate = require("../utils/verifyEmailTemplate");
const generatedAccessToken = require("../utils/generatedAccessToken");
const generatedRefreshToken = require("../utils/generatedRefreshToken");
const uploadImageCloudinary = require("../utils/uploadImageCloudinary");

const updateUserDetails = async (req, res) => {
    try {
        const userId = req.userId //auth middleware
        const {name, email, mobile, password} = req.body
        
        let hashPassword = ""

        if(password){
            const salt = await bcrypt.genSalt(10);
            hashPassword = await bcrypt.hash(password,salt);
        }
         
        const updateUser = await UserModel.updateOne( {_id : userId},{
            //if name was available then user can update name
           ...(name && { name : name}),
           ...(email && { email : email}),
           ...(mobile && { mobile : mobile}),
           ...(password && { password : password})
        })

        return res.json({
            message : "Updated user successfully",
            error : false,
            success : true,
            data : updateUser
        })
        
    } catch (error) {
        return res.status(500).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }

}

module.exports = updateUserDetails;