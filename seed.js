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



const amdRyzen3 = new PcArmada({
    name: "AMD Ryzen 3",
    cost: 297000,
    description: "Este equipo fue ensamblado por OrangeBox. PC ideal para uso hogareño y de oficina, excelente relación entre precio y potencia.",
    caracteristicas:{
        almacenamiento:{
            discoDuro: true,
            interfaz: "Sata 2.5",
            discoSolido: 240
        },
        conectividad:{
            wifi: true,
        },
        memoria:{
            capacidad: 8,
            expandible: true
        },
        procesador:{
            fabricante: 'AMD',
            modelo: "3200G",
            nucleos:{
                nucle: 4,
            },
            frecuencia: 3.6,
            cache: "4Mb cache"
        },
        puertos:{
            usb: true,
            hdmi: true,
            audio: true
        },
        uso: ['Hogar', 'Oficina', 'Gaming', 'Arquitectura', 'Diseño']
    }
})

const amdRyzen5 = new PcArmada({
    name: "AMD Ryzen 5",
    cost: 334990,
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
        memoria:{
            capacidad: 8,
            expandible: true
        },
        procesador:{
            fabricante: 'AMD',
            modelo: "4600G",
            nucleos:{
                nucle: 6,
                subprocesos: 12
            },
            frecuencia: 4.2,
            cache: "8Mb cache"
        },
        puertos:{
            usb: true,
            hdmi: true,
            audio: true
        },
        uso: ['Hogar', 'Arquitectura', 'Diseño']
    }
})

// Array with all PC's
const allPcs = [amdRyzen3, athlon, amdRyzen5]


// Saving
PcArmada.insertMany(allPcs)