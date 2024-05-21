const mongoose = require('mongoose')
const Product = require('./models/product')

// DB joining
mongoose.connect('mongodb://localhost:27017/orangebox')
    .then(()=>{
        console.log("Conection succesful")
    })
    .catch((err)=>{
        console.log(err)
    })


// Function await saving
const awaitSave = async (object) =>{
    await object.save()
}

// Seeding
const gt1030 = new Product ({
    name: 'NVIDIA GT1030 DDR5',
    cost: 129999,
    description: 'Resolución: (máxima analógica) 1920 x 1200 Pixeles',
    tipo: 'Placa de Video',
    fabricante: 'NVIDIA'
})

// Array with all components
const allComps = []

Product.insertMany(allComps)