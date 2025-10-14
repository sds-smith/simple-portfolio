const express = require('express');
const path = require('path');

const app = express();
const PORT = 80;

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'))
})

app.get('/about', async (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'))
})

app.get('/portfolio', async (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'portfolio.html'))
})

app.get('/blog', async (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'blog.html'))
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})