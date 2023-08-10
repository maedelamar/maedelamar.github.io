const express = require('express');
const cors = require('cors');
const path  = require('path');

const app = express();

app.use(express.json());
app.use(express.static('public'));

app.use(cors());

// Navigation
// Homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/home/home.html'));
});

// About Page
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/about/about.html'));
});

// Projects Page
app.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/projects/projects.html'));
})

const SERVER_PORT = 4404;
app.listen(SERVER_PORT, () => console.log(`Listening on ${SERVER_PORT}`));