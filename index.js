// Dependencies
const ejs = require('ejs')
const express = require('express')
const mongoose = require('mongoose')
const PcArmada = require('./models/pcArmada')
const Product = require('./models/product')
const User = require('./models/users')

// DB conection
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
// Si el usuario está autenticado, mostrar opciones de navegación alternativas
app.get('/', (req, res)=>{
    //if (req.isAuthenticated()) {
    //    res.render('index-auth.ejs')
   // } else {
    res.render('index.ejs')
   // }
})

// Pc Armadas routes
app.get('/pc-armadas', async (req, res) => {
    try {
      const pcArmadas = await PcArmada.find({})
      res.render('pcArmadas/index.ejs', { pcArmadas })
    } catch (err) {
      console.log(err)
    }
})
  
app.get('/pc-armadas/:id', async (req, res) => {
    try {
        const { id } = req.params
        const pcArmada = await PcArmada.findById(id)
        res.render('pcArmadas/pcArmada', { pcArmada })
    } catch (err) {
        console.log(err)
    }
})

// Component routes
app.get('/components', async (req, res) => {
    try {
        const components = await Product.find({})
        res.render('components/index.ejs', { components })
    } catch (err){
        console.log(err)
    }
    
})

app.get('/components/:id', async (req, res) => {
    try{
        const { id } = req.params
        const component = await Product.findById(id)
        res.render('components/component', { component })
    } catch (err){
        console.log(err)
    }
})

// Other routes
app.get('/login', (req, res)=>{
    res.render('login.ejs')
})

app.get('about-us', (req, res)=>{
    res.render('aboutUs.ejs')
})

app.get('/carrito', (req, res)=>{
    res.render('carrito.ejs')
})

// Listen to port (port is in Server config at line 4)
app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
    console.log('Server opened! No errors')
})