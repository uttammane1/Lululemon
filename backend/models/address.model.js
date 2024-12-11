const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    address_line: {
        type: String,
        default: ""
    },
    city: {
        type: String,
        default: ""
    },
    state: {
        type: String,
        default: ""
    },
    pincode: {
        type: Number
    },
    country: {
        type: String,
    },
    mobile: {
        type: Number,
    },
    status: {
        type: Boolean,
        default: true
    }
},{
    timestamps: true
})

const AddressModel = mongoose.model("address", addressSchema);

module.exports = AddressModel
