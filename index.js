// Dependencies
const ejs = require('ejs');
const express = require('express');
const mongoose = require('mongoose');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const path = require('path');
require('dotenv').config(); // To use environment variables from .env file

const PcArmada = require('./models/pcArmada');
const Product = require('./models/product');
const User = require('./models/users');

<<<<<<< HEAD
// DB joining
mongoose.connect('mongodb://localhost:27017/orangebox', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("Connection successful");
=======
// DB conection
mongoose.connect('mongodb://localhost:27017/orangebox')
    .then(()=>{
        console.log("Conection succesful")
    })
    .catch((err)=>{
        console.log(err)
>>>>>>> Luna
    })
    .catch((err) => {
        console.log(err);
    });

// Function await saving
const awaitSave = async (object) => {
    await object.save();
}

// Server config
const app = express();
const port = 8080;

// View engine
app.set('view engine', 'ejs');

// Path
app.set('views', path.join(__dirname, '/views'));
app.use(express.static('public'));
app.use(express.json());

// Nodemailer configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Main
app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/login', (req, res) => {
    res.render('login.ejs');
});

app.get('/pc-armadas', (req, res) => {
    res.render('pcArmadas.ejs');
});
// Pc Armadas routes
app.get('/pc-armadas', async (req, res) => {
    try {
      const pcArmadas = await PcArmada.find({})
      res.render('pcArmadas/index.ejs', { pcArmadas })
    } catch (err) {
      console.log(err)
    }
})
  
app.get('/pc-armadas/:id', async (req, res) => {
    try {
        const { id } = req.params
        const pcArmada = await PcArmada.findById(id)
        res.render('pcArmadas/pcArmada', { pcArmada })
    } catch (err) {
        console.log(err)
    }
})

// Component routes
app.get('/components', async (req, res) => {
    try {
        const components = await Product.find({})
        res.render('components/index.ejs', { components })
    } catch (err){
        console.log(err)
    }
    
})

app.get('/components/:id', async (req, res) => {
    try{
        const { id } = req.params
        const component = await Product.findById(id)
        res.render('components/component', { component })
    } catch (err){
        console.log(err)
    }
})

// Other routes
app.get('/login', (req, res)=>{
    res.render('login.ejs')
})

app.get('about-us', (req, res)=>{
    res.render('aboutUs.ejs')
})

app.get('/carrito', (req, res) => {
    res.render('carrito.ejs');
});

app.get('/components', (req, res) => {
    res.render('components.ejs');
});

app.get('/about-us', (req, res) => {
    res.render('aboutUs.ejs');
});

// Ruta para el registro de usuarios
app.post('/register', 
    body('email').isEmail().normalizeEmail(),
    body('password').isLength({ min: 6 }),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const { email, password } = req.body;
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: 'Email already in use' });
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            const verificationToken = crypto.randomBytes(32).toString('hex');

            const newUser = new User({
                email,
                password: hashedPassword,
                verificationToken
            });

            await newUser.save();

            const verificationUrl = `http://localhost:${port}/verify-email?token=${verificationToken}`;
            await transporter.sendMail({
                to: email,
                subject: 'Verify your email',
                text: `Please verify your email by clicking the following link: ${verificationUrl}`
            });

            res.status(201).json({ message: 'User created successfully. Please check your email to verify your account.' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
);

// Ruta para la verificación de correo electrónico
app.get('/verify-email', async (req, res) => {
    const { token } = req.query;

    try {
        const user = await User.findOne({ verificationToken: token });

        if (!user) {
            return res.status(400).json({ message: 'Invalid or expired token' });
        }

        user.isVerified = true;
        user.verificationToken = undefined;
        await user.save();

        res.status(200).json({ message: 'Email verified successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Listen to port (port is in Server config at line 4)
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    console.log('Server opened! No errors');
});
