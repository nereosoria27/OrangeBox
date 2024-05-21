// Dependencies
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    // cambiar a rechazar IDs
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        //required: 'Email address is required',
        //validate: [validateEmail, 'Please fill a valid email address'],
        //match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: true
    }
})

// Product model
const User = new mongoose.model('User', userSchema)
User.createCollection()

// Exporting module
module.exports = User