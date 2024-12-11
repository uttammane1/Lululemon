const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    image: {
        type: Array,
        default: []
    },
    category: [
        {
           type: mongoose.Schema.ObjectId,
           ref: "category"
        }
    ],
    subCategory : [
        {
          type: mongoose.Schema.ObjectId,
          ref: 'subCategory'   
        }
    ],
    unit: {
        type: String,
        default: ""
    },
    stock: {
        type: Number,
        default: ""
    },
    price: {
        type: Number,
        default: ""
    },
    discount: {
        type: Number,
        default: ""
    },
    description: {
        type: String,
        default: ""
    },
    more_details: {
        type: Ojects,
        default: {}
    },
    publish: {
        type: Boolean,
        default: true
    }
},{
    timestamps: true
})

const ProductModel = mongoose.model("product", productSchema);

module.exports = ProductModel;