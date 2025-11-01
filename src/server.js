const express = require('express');
const path = require('path');
const fs = require('fs');
const { createElement } = require('react');
const { renderToString } = require('react-dom/server');
const Header = require('./components/header.js');
const Footer = require('./components/footer.js');
const GeometricBackground = require('./components/geometric-background.js');

const app = express();
const PORT = 80;

app.use(express.static(path.join(__dirname, 'public')));

const pages = {
    home: 'home',
    about: 'about',
    portfolio: 'portfolio',
    blog: 'blog',
}

Object.entries(pages).forEach(([key, page]) => {
    fs.readFile(path.resolve(`./src/public/${page}.html`), "utf8", (err, data) => {
        if (err) {
            console.error(err);
        }
        pages[key] = data.replace(
            `<header></header>`,
            `<header>${renderToString(createElement(Header))}</header>`
        ).replace(
            `<footer></footer>`,
            `<footer>${renderToString(createElement(Footer))}</footer>`
        ).replace(
            `<div class="geometric-background"></div>`,
            `<div class="geometric-background">${renderToString(createElement(GeometricBackground))}</div>`
        )
    })
})

app.get('/', (req, res) => res.send(pages.home));
app.get('/about', (req, res) => res.send(pages.about));
app.get('/portfolio', (req, res) => res.send(pages.portfolio));
app.get('/blog', (req, res) => res.send(pages.blog));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})