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

// Ejemplo de pc armada (no borrar)
const kairosPro = new PcArmada({
    name: "KairosPro",
    cost: 1351447,
    description: "Este equipo fue ensamblado por OrangeBox",
    caracteristicas:{
        almacenamiento:{
            discoDuro: true,
            interfaz: "Sata 2.5",
            discoSolido: 240
        },
        conectividad:{
            wifi: true,
        },
        graficos:{
            motor: "Asus Nvidia",
            modelo: "RTX 4060Ti",
            vram: 8,
            memoria: "GDDR6"
        },
        memoria:{
            capacidad: 16,
            expandible: true
        },
        procesador:{
            fabricante: 'AMD',
            modelo: "4000G",
            nucleos:{
                nucle: 4,
                subprocesos: 8
            },
            frecuencia: 4,
            cache: "4Mb cache"
        },
        puertos:{
            usb: true,
            hdmi: true,
            audio: true
        },
        uso: ['Hogar', 'Gaming', 'Arquitectura']
    }
})

// Saving kariosPro into pcArmadas table
awaitSave(kairosPro)

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
    res.render('pcArmadas.ejs')
})






// Listen to port (port is in Server config at line 4)
app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
    console.log('Server opened! No errors')
})