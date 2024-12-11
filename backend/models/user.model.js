const { verify } = require("jsonwebtoken");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: ""
    },
    mobile: {
        type: Number,
        default: null    
    },
    refresh_token: {
        type: String,
        default: ""
    },
    verify_email: {
        type: Boolean,
        default: false
    },
    last_login_date: {
        type: Date,
        default: ""
    },
    status: {
        type: String,
        enum: ["Active", "Inactive", "Suspended"],   
        default: "Active"
    },
    address_details: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'address'
        }
    ],
    shopping_cart: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'cartProduct' 
            // cartproduct is a collectionName
        }
    ],
    shopping_cart: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'cartProduct' 
            // cartproduct is a collectionName
        }
    ],
    shopping_cart: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'cartProduct' 
            // cartproduct is a collectionName
        }
    ],
    orderHistory: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'order' 
            // order is a collectionName
        }
    ],
    forgot_password_otp: {
        type: String,
        default: null
    },
    forgot_password_expiry:{
        type: Date,
        default: ""
    },
    role: {
        type: String,
        enum: ['ADMIN', 'USER'],
        default: "USER"
    }
},{
    timestamps: true
})

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;