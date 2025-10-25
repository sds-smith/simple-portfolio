const express = require('express');
const path = require('path');
const fs = require('fs');
const { createElement } = require('react');
const { renderToString } = require('react-dom/server');
const Header = require('./components/header.js');
const Footer = require('./components/footer.js');

const app = express();
const PORT = 80;

app.use(express.static(path.join(__dirname, 'public')))

const handleRequest = (page) => async (req, res) => {
    fs.readFile(path.resolve(`./src/public/${page}.html`), "utf8", (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send(`An error occurred.`)
        }
        return res.send(
            data.replace(
                `<header></header>`,
                `<header>${renderToString(createElement(Header))}</header>`
            ).replace(
                `<footer></footer>`,
                `<footer>${renderToString(createElement(Footer))}</footer>`
            )
        )
    })
}

app.get('/', handleRequest('home'));
app.get('/about', handleRequest('about'));
app.get('/portfolio', handleRequest('portfolio'));
app.get('/blog', handleRequest('blog'));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})