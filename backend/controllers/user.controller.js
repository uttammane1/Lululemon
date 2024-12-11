const UserModel = require("../models/user.model");
const sendEmail = require("../config/sendEmail");
const bcrypt = require("bcrypt");
const verifyEmailTemplate = require("../utils/verifyEmailTemplate");
const generatedAccessToken = require("../utils/generatedAccessToken");
const generatedRefreshToken = require("../utils/generatedRefreshToken");
const uploadImageCloudinary = require("../utils/uploadImageCloudinary");



const userRegistration = async (req, res) => {
    // const {name, email, password} = req.body
    try {
        const {name, email, password} = req.body


        if(!name || !email || !password){
            return res.status(400).json({
                message: "Provide email, name, password",
                error: true,
                success: false            
            })
        }
        const user = await UserModel.findOne({email})

        if(user){
            return res.json({
                message: "Already registered email",
                error: true,
                success : false
            })

        }
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password,salt);

        // const newUser = new UserModel({
        //     name,
        //     email,
        //     password : hashPassword 
        // })
        // await newUser.save();

        const payload = {
            name,
            email,
            password : hashPassword,
            status : "Active",
            verify_email : false
        }
        
        const newUser = new UserModel(payload);
        const savedUser = await newUser.save();
        console.log("User saved successfully:", savedUser);

        // i will create url
        const VerifyEmailUrl = `${process.env.FRONTEND_URL}/verify-email?code=${savedUser?._id}` 

        const verifyEmail = await sendEmail({
            sendTo : email,
            subject : "Verify email from myntra",
            html: verifyEmailTemplate({
                name,
                url: VerifyEmailUrl
            })

        })

        return res.json({
            message: "User register successfully",
            error: false,
            success: true,
            // data: savedUser
            data: { userId: savedUser._id, email: savedUser.email },

        })
         
    } catch (error) {
        return res.status(500).json({
            message: "Occured Error during creation of user",
            error: true,
            success: false
        })
    }
}

module.exports = userRegistration;

