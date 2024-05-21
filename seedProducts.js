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
