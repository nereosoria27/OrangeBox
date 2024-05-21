const mongoose = require('mongoose')
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

// Seeding
const productGt1030 = new Product ({
    name: 'NVIDIA GT1030 DDR5',
    cost: 129999,
    description: 'Resolución: (máxima analógica) 1920 x 1200 Pixeles',
    tipo: 'Placa de Video',
    fabricante: 'NVIDIA'
})

const productRTX4060ti = new Product ({
    name: 'NVIDIA RTX 4060ti',
    cost: 649999,
    description: 'Resolucion (maxima digital) 7680 x 4320 Pixeles',
    tipo: 'Placa de Video',
    fabricante: 'NVIDIA'
})

const productGigabyte = new Product ({
    name: 'GIGABYTE RADEON RX6500',
    cost: 219999,
    description: 'Resolucion (maxima digital) 7680 x 4230 Pixeles',
    tipo: 'Placa de Video',
    fabricante: 'AMD'
})

const productPowerColor = new Product ({
    name: 'RADEON Red Dragon RX550',
    cost: 169999,
    description: 'Resolucion (maxima DVI) 2560 x 1600 Pixeles',
    tipo: 'Placa de Video',
    fabricante: 'PowerColor'
})

const productAmdRyzen5600 = new Product ({
    name: 'AMD Ryzen 5600G',
    cost: 185999,
    description: 'Nucleos de CPU 6, Nucleos de GPU 12 y hilos 12',
    tipo: 'Microprocesador',
    fabricante: 'AMD'
})

const productAmdAthlon = new Product ({
    name: 'AMD Athlon 3000G',
    cost: 65990,
    description: 'Nucleos de CPU 2 con 4 subprocesos. Nucleos de GPU 3',
    tipo: 'Microprocesador',
    fabricante: 'AMD'
})

const productAmdRyzen7 = new Product ({
    name: 'AMD Ryzen7 7700X',
    cost: 500000,
    description: 'Nucleos de CPU 8 con 16 hilos',
    tipo: 'Microprocesador',
    fabricante: 'AMD'
})

const productIntelCore13 = new Product({
    name: 'Intel Core 13 10100',
    cost: 134000,
    description: 'Nucleos de CPU 4 con 8 subprocesos',
    tipo: 'Microprocesador',
    fabricante: 'Intel'
})

const productIntelCorei7 = new Product({
    name: 'Intel Core i7 12700k',
    cost: 409890,
    description: 'Nucleos de CPU 12 con 20 subprocesos',
    tipo: 'Microprocesador',
    fabricante: 'Intel'
})

const productAsrockh510 = new Product({
    name: 'ASRock H510',
    cost: 124999,
    despcription: 'Graficos hdmi 2.0 y 1.4',
    tipo: 'Motherboard',
    fabricante: 'ASRock'
})

const productAsrocka620 = new Product({
    name: 'ASRock A620M',
    cost: 144999,
    description: 'Graficos hdmi 2.1',
    tipo: 'Motherboard',
    fabricante: 'ASRock'
})

const productAsush50 = new Product({
    name: 'ASUS H510M/K',
    cost: 96999,
    description: 'Graficos hdmi 2.o',
    tipo: 'Motherboard',
    fabricante: 'ASUS'
})

const productAsusRog = new Product({
    name: 'ASUS ROGCrosshair X670E Hero',
    cost: 929999,
    description: 'Graficos integrados',
    tipo: 'Motherboard',
    fabricante: 'ASUS'
})

const productMarkddr3 = new Product({
    name: 'MarkVision DDR3',
    cost: 17990,
    description: '8Gb',
    tipo: 'Ram',
    fabricante: 'MarkVision'
})

const productFurybeast = new Product({
    name: 'Fury Beast DDR4',
    cost: 58000,
    description: '16Gb',
    tipo: 'Ram',
    fabricante: 'Fury'
})

const productAdatad60 = new Product({
    name: 'ADATA D60G',
    cost: 144990,
    description: '32Gb',
    tipo: 'Ram',
    fabricante: 'ADATA'
})

const productPatriot = new Product({
    name: 'Patriot Viper Steel DDR4',
    cost: 129990,
    description: '32Gb muy fachera',
    tipo: 'Ram',
    fabricante: 'Patriot'
})

const productSeagate2 = new Product({
    name: 'DISCO DURO HDD 2 TB SEAGATE SATA',
    cost: 89999,
    description: 'Capacidad de almacenamiento de 2TB',
    tipo: 'Disco duro',
    fabricante: 'Seagate'
})

const productSeagate8 = new Product({
    name: 'DISCO DURO HDD 8 TB SEAGATE SATA',
    cost: 129990,
    description: 'Capacidad de almacenamiento de 8TB',
    tipo: 'Disco duro',
    fabricante: 'Seagate'
})

const productWestern1 = new Product({
    name: 'DISCO DURO HDD 1 TB WESTERN DIGITAL WD BLUE',
    cost: 78999,
    description: 'Capacidad de almacenamiento de 1TB',
    tipo: 'Disco duro',
    fabricante: 'WesternDigital'
})

const productWestern6 = new Product({
    name: 'DISCO DURO HDD 6 TB WESTERN DIGITAL WD SATA III PURPLE',
    cost: 269999,
    description: 'Capacidad de almacenamiento de 6TB',
    tipo: 'Disco duro',
    fabricante: 'WesternDigital'
})

const productAdata512 = new Product({
    name: 'DISCO SOLIDO ADATA SSD 512GB M.2',
    cost: 63990,
    description: 'Capacidad: 512 GB',
    tipo: 'Disco SSD',
    fabricante: 'ADATA'
})

const productAdata2 = new Product({
    name: 'DISCO SOLIDO SSD ADATA 2TB M.2',
    cost: 224990,
    description: 'Capacidad: 2TB',
    tipo: 'Disco SSD',
    fabricante: 'ADATA'
})

const productPatriot480 = new Product({
    name: 'DISCO SOLIDO SSD PATRIOT BURST ELITE 480G',
    cost: 38999,
    description: 'Capacidad: 480GB',
    tipo: 'Disco SSD',
    fabricante: 'Patriot'
})

const productPatriot960 = new Product({
    name: 'DISCO SOLIDO SSD PATRIOT BURST ELITE 960GB',
    cost: 70990,
    description: 'Capacidad: 960GB',
    tipo: 'Disco SSD',
    fabricante: 'Patriot'
})

const productAsusNvidia = new Product({
    name: 'PLACA DE VIDEO ASUS NVIDIA GT 1030',
    cost: 129999,
    description: 'Núcleo CUDA: 384. Máxima resolución: 1920 x 1200 Pixeles',
    tipo: 'Placa de Video',
    fabricante: 'ASUS'
})

const productAsusRogStrix = new Product({
    name: 'PLACA DE VIDEO ASUS ROG STRIX NVIDIA GEFORCE',
    cost: 1999999,
    description: 'Núcleo CUDA: 9728. Máxima resolución: 7680 x 4320',
    tipo: 'Placa de Video',
    fabricante: 'ASUS'
})

const productGigaByteRadeon = new Product({
    name: 'PLACA DE VIDEO GPU GIGABYTE RADEON',
    cost: 196999,
    description: 'Máxima resolución digital: 7680 x 4320',
    tipo: 'Placa de Video',
    fabricante: 'GigaByte'
})

const productGigaByteNvidia = new Product({
    name: 'PLACA DE VIDEO GIGABYTE NVIDIA GEFORCE',
    cost: 504999,
    description: 'Máxima resolución digital: 7680 x 4320',
    tipo: 'Placa de Video',
    fabricante: 'GigaByte'
})

const productGabinete2000D = new Product({
    name: 'GABINETE CORSAIR 2000D AIRFLOW BLACK ITX',
    cost: 140990,
    description: 'Dimensiones de la caja (mm) 458 mm x 200 mm x 371 mm. Color: NEGRO',
    tipo: 'Gabinete',
    fabricante: 'Corsair'
})
const productGabinete5000X = new Product({
    name: 'GABINETE CORSAIR 5000X TG RGB WHITE',
    cost: 299990,
    description: 'Dimensiones de la caja (mm) 520 mm x 245 mm x 520 mm. Color: BLANCO',
    tipo: 'Gabinete',
    fabricante: 'Corsair'
})
const productGabineteH350 = new Product({
    name: 'GABINETE THERMALTAKE H350 TG BLACK RGB',
    cost: 95990,
    description: 'Dimensiones de la caja (mm) 442 mm x 210 mm x 480 mm. Color: NEGRO',
    tipo: 'Gabinete',
    fabricante: 'Thermaltake'
})
const productGabineteV350 = new Product({
    name: 'GABINETE THERMALTAKE V350 TG ARGB BLACK C/COOLER',
    cost: 184990,
    description: 'Dimensiones de la caja (mm) 550 mm x 250 mm x 550 mm. Color: NEGRO',
    tipo: 'Gabinete',
    fabricante: 'Thermaltake'
})







// Array with all components
const allComps = [productAdatad60, productAmdAthlon, productAmdRyzen5600, productAmdRyzen7, productAsrocka620, productAsrockh510, productAsusRog, productAsush50, productFurybeast, productGigabyte, productGt1030, productIntelCore13, productIntelCorei7, productMarkddr3, productPatriot, productPowerColor, productRTX4060ti, productSeagate2, productSeagate8, productWestern1, productWestern6, productAdata512, productAdata2, productPatriot480, productPatriot960, productAsusNvidia, productAsusRogStrix, productGigaByteRadeon, productGigaByteNvidia, productGabinete2000D, productGabinete5000X, productGabineteH350, productGabineteV350]

Product.insertMany(allComps)