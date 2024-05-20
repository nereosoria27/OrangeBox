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

// Seeds
const athlon = new PcArmada({
    name: "PC AMD ATHLON",
    cost: 308087,
    description: "Este equipo fue ensamblado por OrangeBox. PC ideal para uso hogareño y de oficina, excelente relación entre precio y potencia."
    ,
    caracteristicas:{
        almacenamiento:{
            discoDuro: false,
            interfaz: "Sata 2.5",
            discoSolido: 240
        },
        conectividad:{
            wifi: true,
            ethernet: true,
        },
        memoria:{
            capacidad: 4,
            expandible: true
        },
        procesador:{
            fabricante: 'Athlon',
            modelo: "3000G",
            nucleos:{
                nucle: 2,
                subprocesos: 4
            },
            frecuencia: 3.5,
            cache: "4Mb StamartCache"
        },
        puertos:{
            usb: true,
            hdmi: true,
            audio: true
        },
        uso: ['Hogar', 'Gaming', 'Arquitectura']
    }
})



// Array with all PC's
const allPcs = [athlon]

// Saving
PcArmada.insertMany(allPcs)