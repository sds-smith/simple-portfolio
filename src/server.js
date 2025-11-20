const express = require('express');
const path = require('path');
const fs = require('fs');
const { createElement } = require('react');
const { renderToString } = require('react-dom/server');
const Header = require('./components/header.js');
const Footer = require('./components/footer.js');
const GeometricBackground = require('./components/geometric-background.js');

const app = express();
const PORT = 3561;

app.use(express.static(path.join(__dirname, 'public')));

const pages = {
    home: 'home',
    about: 'about',
    portfolio: 'portfolio',
    blog: 'blog',
}

const renderComponents = () => Object.entries(pages).forEach(([key, page]) => {
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

const handleBlog = (req, res) => {
    const { post } = req.query;
    if (post) {
        let blog = pages.blog;
        fs.readFile(path.resolve(`./src/blog/${post}.html`), "utf8", (err, data) => {
            if (err) {
                console.error(err);
            }
            blog = blog.replace(
                `<h3 class="title ${post}">`,
                `<h3 class="title ${post} active">`
            ).replace(
                `<a href="/blog?post=${post}">Continue reading`,
                `<a href="/blog">`
            ).replace(
                `<span id="${post}_x" class="material-symbols-outlined keyboard_arrow_x">keyboard_arrow_right</span>`,
                `<span id="${post}_x" class="material-symbols-outlined keyboard_arrow_x">keyboard_arrow_left</span>`
            ).replace(
                `<span id="${post}_y" class="material-symbols-outlined keyboard_arrow_y">keyboard_arrow_down</span>`,
                `<span id="${post}_y" class="material-symbols-outlined keyboard_arrow_y">keyboard_arrow_up</span>`
            ).replace(
                `<article ></article>`,
                data
            )
            return res.send(blog);
        })
    } else {
        return res.send(pages.blog)
    }
}

renderComponents();

app.get('/', (req, res) => res.send(pages.home));
app.get('/about', (req, res) => res.send(pages.about));
app.get('/portfolio', (req, res) => res.send(pages.portfolio));
app.get('/blog', handleBlog);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})