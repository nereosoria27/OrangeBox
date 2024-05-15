// Dependencies
const mongoose = require('mongoose')
const ejs = require('ejs')
const express = require('express')

// DB config
// Base de datos no creada todavia
try{
    async function main() {
        await mongoose.connect('mongodb://127.0.0.1:27017/orangebox'); 
        console.log("Conected succesfuly")
    }
}catch(err){
    console.log(err)
}

// Creating schema
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    cost: {
        type: Number,
        required: true,
        min: 250000
    }

})

// Server config
const app = express()
const port = 8080

// View engine
app.set('view engine', 'ejs')

// Path
const path = require('path')
app.set('views', path.join(__dirname, '/views'))
app.use(express.static('public'))

// Main
app.get('/', (req, res)=>{
    res.render('index.ejs')
})

// Other routes
app.get('/login', (req, res)=>{
    res.render('logIn.ejs')
})

// Listen to port (port is in Server config at line 4)
app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
    console.log('Server opened! No errors')
})