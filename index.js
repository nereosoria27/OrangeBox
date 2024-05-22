// Dependencies
const ejs = require('ejs')
const express = require('express')
const mongoose = require('mongoose')
const PcArmada = require('./models/pcArmada')
const Product = require('./models/product')
const User = require('./models/users')

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
// Si el usuario está autenticado, mostrar opciones de navegación alternativas
app.get('/', (req, res)=>{
    //if (req.isAuthenticated()) {
    //    res.render('index-auth.ejs')
   // } else {
    res.render('index.ejs')
   // }
})

// Other routes
app.get('/login', (req, res)=>{
    res.render('login.ejs')
})
//pcArray = []
//for (product of Product){
//    pcArray.push(product)
//}
app.get('/pc-armadas', (req, res)=>{
    // {pcArray: pcArray1}
    //pcArray1 = this.pcArray
    res.render('pcArmadas.ejs')
})

app.get('/carrito', (req, res)=>{
    res.render('carrito.ejs')
})

app.get('/components', (req, res)=>{
    res.render('components.ejs')
})

app.get('about-us', (req, res)=>{
    res.render('aboutUs.ejs')
})

//for (pc of pcArray){
//  app.get(`/${pc.name}`, (req, res)=>{
//      res.render(`${pc.name}.ejs`)
//    })
//}

// Listen to port (port is in Server config at line 4)
app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
    console.log('Server opened! No errors')
})