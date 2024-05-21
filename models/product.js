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
    tipo: {
        required: true,
        type: String,
        enum: ['Microprocesador', 'Motherboard', 'Ram', 'Disco Duro', 'Disco SSD', 'Placa de Video', 'Gabinete', 'Cooler']
    },
    fabricante: {
        required: false,
        type: String,
        enum: ['AMD', 'Intel', 'ASRock', 'ASUS', 'NVIDIA', 'Crucial', 'Patriot', 'MarkVision', 'Fury', 'Seagate', 'WesternDigital', 'HIK', 'ADATA', 'Gamdias', 'Red Dragon', 'PowerColor', 'GigaByte', 'Corsair', 'Thermaltake', 'CoolerMaster' ]
    }
})

// Product model
const Product = new mongoose.model('Product', productSchema)
Product.createCollection()

// Exporting module
module.exports = Product