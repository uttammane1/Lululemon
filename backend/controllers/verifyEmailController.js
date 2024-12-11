const UserModel = require("../models/user.model");
const sendEmail = require("../config/sendEmail");
const bcrypt = require("bcrypt");
const verifyEmailTemplate = require("../utils/verifyEmailTemplate");
const generatedAccessToken = require("../utils/generatedAccessToken");
const generatedRefreshToken = require("../utils/generatedRefreshToken");


const verifyEmailController = async (req, res) => {
        try {
            const { code } = req.body
    
            const user = await UserModel.findById({ _id : code})
    
            if(!user){
                return res.status(400).json({
                    message: "Invalid Code",
                    error : true,
                    success : false
                })
            }
            const updateUser = await UserModel.updateOne({ _id : code},{
                verify_email : true
            })
    
            return res.json({
                message: "Verify email done",
                error: false,
                success: true
            })
    
            
        } catch (error) {
            return res.status(500).json({
                message: error.message || error,
                error : true,
                success : false
            })
            
        }
    }
    
    module.exports = verifyEmailController;
    
    