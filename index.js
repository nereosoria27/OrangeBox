// Dependencies
const ejs = require('ejs')
const express = require('express')
const mongoose = require('mongoose')
const PcArmada = require('./models/pcArmada')
const Product = require('./models/product')
const User = require('./models/users')
const methodOverride = require('method-override')

// DB conection
mongoose.connect('mongodb://localhost:27017/orangebox')
    .then(()=>{
        console.log("Conection succesful")
    })
    .catch((err)=>{
        console.log(err)
    })

// Function await saving just to troll
const awaitSave = async (object) =>{
    await object.save()
}

// Server config
const app = express()
const port = 8080

// Override
app.use(methodOverride('_method'))

// View engine
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))

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

// Arrays of categories
const tipito = ['Microprocesador', 'Motherboard', 'Ram', 'Disco Duro', 'Disco SSD', 'Placa de Video', 'Gabinete', 'Cooler']
const fabricantesito = ['AMD', 'Intel', 'ASRock', 'ASUS', 'NVIDIA', 'Crucial', 'Patriot', 'MarkVision', 'Fury', 'Seagate', 'WesternDigital', 'HIK', 'ADATA', 'Gamdias', 'Red Dragon', 'PowerColor', 'GigaByte', 'Corsair', 'Thermaltake', 'CoolerMaster', 'Vengeance' ]

// Create
app.get('/components/im-an-admin-doing-stuff', (req, res) => {
    res.render('components/new.ejs', { fabricantesito, tipito })
})

app.post('/components', async (req, res) => {
    const newComponent = new Product(req.body)
    awaitSave(newComponent)
    res.redirect(`/components/${newComponent._id}`)
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

app.get('/components/:id/im-an-admin-doing-stuff', async (req, res) => {
    const { id } = req.params
    const component = await Product.findById(id)
    res.render('components/edit.ejs', {component, fabricantesito, tipito })
})

app.put('/components/:id', async (req, res) => {
    const { id } = req.params
    const component = await Product.findByidAndUpdate(id, req.body, {runValidators: true})
    res.redirect(`/components/${component._id}`, {component})
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