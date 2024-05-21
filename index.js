// Dependencies
const ejs = require('ejs')
const express = require('express')
const mongoose = require('mongoose')
const PcArmada = require('./models/pcArmada')
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
    res.render('login.ejs')
})

app.get('/register', (req, res)=>{
    res.render('register.ejs')
})

app.get('/pc-armadas', (req, res)=>{
    // {pcArray requets from db falta hacer jsakdjsdkajsdkjskdj}
    res.render('pcArmadas.ejs')
})






// Listen to port (port is in Server config at line 4)
app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
    console.log('Server opened! No errors')
})