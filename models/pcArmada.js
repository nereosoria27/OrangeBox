// Dependencies
const mongoose = require('mongoose')

// Creating Schema
const pcArmadaSchema = new mongoose.Schema({
    // General
    name:{
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true,
        min: 20000
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
                required: false
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
                required: false
            },
            modelo:{
                type: String,
                required: false
            },
            vram: {
                type: Number,
                required: false
            },
            memoria:{
                type: String,
                required: false
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
                    required: false,
                    max: 64,
                    min: 2,
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

// PcArmada model
const PcArmada = mongoose.model('PcArmada', pcArmadaSchema)
PcArmada.createCollection()


// Exporting module
module.exports = PcArmada