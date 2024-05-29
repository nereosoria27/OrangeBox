const ejs = require('ejs');
const express = require('express');
const methodOverride = require('method-override');
const allPcs = require('./seed')
const allComps = require('./seedProduct')


// Server config
const app = express();
const port = 8080;

// Override
app.use(methodOverride('_method'));

// View engine
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

// Path
const path = require('path');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static('public'));

// Main route
app.get('/', (req, res) => {
    res.render('index.ejs', { allPcs });
});

// PC Armadas routes --------------------------------------------------------
app.get('/pc-armadas', (req, res) => {
    res.render('pcArmadas/index.ejs', { pcArmadas: allPcs });
});

// Create
app.get('/pc-armadas/im-an-admin-doing-stuff', (req, res) => {
    res.render('pcArmadas/new.ejs');
});

// Each PC Armada
app.get('/pc-armadas/:id', (req, res) => {
    const { id } = req.params;
    const pcArmada = allPcs[id];
    res.render('pcArmadas/pcArmada', { pcArmada });
});

// Component routes ------------------------------------------
app.get('/components', (req, res) => {
    res.render('components/index.ejs', { components: allComps });
});

// Create
app.get('/components/im-an-admin-doing-stuff', (req, res) => {
    res.render('components/new.ejs', { fabricantesito, tipito });
});

app.post('/components', (req, res) => {
    // Handle form submission
});

// Each component
app.get('/components/:id', (req, res) => {
    const { id } = req.params;
    const component = allComps[id];
    res.render('components/component', { component });
});

// Edit / Update
app.get('/components/:id/im-an-admin-doing-stuff', (req, res) => {
    const { id } = req.params;
    const component = allComps[id];
    res.render('components/edit.ejs', { component, fabricantesito, tipito });
});

app.put('/components/:id', (req, res) => {
    // Handle update
});

// Other routes
app.get('/login', (req, res) => {
    res.render('login.ejs');
});

// Listen to port
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
