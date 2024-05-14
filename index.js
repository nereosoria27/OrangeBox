// Dependencies
const mongoose = require('mongoose')
const ejs = require('ejs')
const express = require('express')

// DB config

// todavia no hay db creada, necesito estar en casita
try{
    async function main() {
        await mongoose.connect('mongodb://127.0.0.1:27017/test'); 
        console.log("Conected succesfuly")
    }
}catch(err){
    console.log(err)
}

// Creating schema


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
    res.render('landingPage.ejs')
})

// Listen to port (port is in Server config at line 4)
app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
    console.log('Server opened! No errors')
})