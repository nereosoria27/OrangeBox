// Dependencies
const mongoose = require('mongoose')

// Creating schema
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true,
        min: 250000
    },
    description: {
        type: String,
        required: false,
    },
    //imagen: required
    //modelo: id
})

// Product model
const Product = new mongoose.model('Product', productSchema)
Product.createCollection()

// Exporting module
module.exports = Product