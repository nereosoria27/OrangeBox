const mongoose = require('mongoose')
const PcArmada = require('./models/pcArmada')

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
    cost: 236990,
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
    name: "PC INTEL CELERON",
    cost: 319990,
    description: "Este equipo fue ensamblado por OrangeBox. PC ideal para uso hogareño y de oficina, excelente relación entre precio y potencia.",
    caracteristicas:{
        almacenamiento:{
            discoDuro: true,
            interfaz: "Sata 2.5",
            discoSolido: 240
        },
        conectividad:{
            wifi: true,
            ethernet: true
        },
        memoria:{
            capacidad: 8,
            expandible: true
        },
        procesador:{
            fabricante: 'Celeron',
            modelo: "G5925",
            nucleos:{
                nucle: 2,
                subprocesos: 2
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
    name: "Neodab",
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

const amdRyzen5600 = new PcArmada({
    name: 'Gold Ryzen',
    cost: 383990,
    description: "Este equipo fue ensamblado por OrangeBox. PC ideal para uso hogareño y de oficina, excelente relación entre precio y potencia.",
    caracteristicas: {
        almacenamiento: {
            discoDuro: true,
            discoSolido: 240,
        },
        conectividad: {
            wifi: true,
        },
        memoria: {
            capacidad: 8,
            extendible: true,
        },
        procesador: {
            fabricante: 'AMD',
            modelo: '5600G',
            nucleos: {
                nucle: 6,
                subprocesos: 12,
            },
            frecuencia: 4.40,
            cache: '16Mb Cache',
        },
        puertos:{
            usb: true,
            hdmi: true,
            audio: true
        },
        uso: ['Hogar', 'Gaming', 'Diseño', 'Arquitectura']
    }
})

const celeron = new PcArmada({
    name: "Blue Ryzen",
    cost: 409990,
    description: "Este equipo fue ensamblado por OrangeBox.",
    caracteristicas:{
        almacenamiento:{
            discoDuro: true,
            interfaz: "Sata 2.5",
            discoSolido: 240
        },
        conectividad:{
            wifi: true,
            bluethoot: false,
        },
        memoria:{
            capacidad: 16,
            expandible: true
        },
        procesador:{
            fabricante: 'Ryzen',
            modelo: "5600G",
            fabricante: 'Intel',
            modelo: "3000G",
            nucleos:{
                nucle: 6,
                subprocesos: 13
            },
            frecuencia: 4.4,
            cache: "16Mb Cache"
        },
        puertos:{
            usb: true,
            hdmi: true,
            audio: true
        },
        uso: ['Hogar', 'Arquitectura']
    }
})


// Array with all PC's
const allPcs = [athlon, celeron, amdRyzen3, amdRyzen5]

// Saving
PcArmada.insertMany(allPcs)