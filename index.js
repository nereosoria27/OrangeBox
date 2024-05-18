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

// Function await saving
const awaitSave = async (object) =>{
    await object.save()
}

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
const Product = new mongoose.model('Product', productSchema)


// Creating pcArmadaSchema
const pcArmadaSchema = new mongoose.Schema({
    // General
    name:{
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

    // Caracteristicas especificas
    caracteristicas:{

        // Almacenamiento
        almacenamiento:{
            discoDuro: Boolean,
            interfaz:{
                type: String,
                required: true
            } ,
            discoSolido: {
                type: Number,
                required: true,
            }
        },

        // Conectividad
        conectividad:{
            wifi:{
                type: Boolean,
                required: true
            },
            ethernet: Boolean,
            Bluetooth: Boolean
        },

        // Graficos
        graficos:{
            motor:{
                type: String,
                required: true
            },
            modelo:{
                type: String,
                required: true
            },
            vram: {
                type: Number,
                required: true
            },
            memoria:{
                type: String,
                required: true
            }
        },

        // Memoria
        memoria:{
            capacidad:{
                type: Number,
                required: true
            },
            expandible:{
                type: Boolean,
                required: true
            }
        },

        // Procesador
        procesador:{
            fabricante: {
                type: String,
                required: true,
                enum: ['AMD', 'Intel']
            },
            modelo:{
                type: String,
                required: false
            },
            nucleos:{
                nucle: {
                    type: Number,
                    required: true,
                    max: 8,
                    min: 2,
                },
                subprocesos:{
                    type: Number,
                    required: true,
                    max: 16,
                    min: 4,
                }
            },
            frecuencia: {
                type: Number,
                required: true
            },
            cache:{
                type: String,
                required: true
            }
        },
        puertos:{
            usb:{
                type: Boolean,
                required: true
            },
            hdmi:{
                type: Boolean,
                required: true
            },
            audio:{
                type: Boolean,
                required: true
            }
        },

        uso: {
            type: [String],
            enum: ['Hogar', 'Oficina', 'Gaming', 'Arquitectura', 'Diseño', 'Edición']
        }
    }
    //imagen: required
    //modelo: id
})

// pcArmada Virtual: Get Components
pcArmadaSchema.virtual('getComponents').get(function(){
    return `${this.caracteristicas}`
})


const PcArmada = mongoose.model('PcArmada', pcArmadaSchema)
PcArmada.createCollection()


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