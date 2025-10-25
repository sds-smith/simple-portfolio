const { createElement, Fragment } = require('react');

function Header() {
    return (
        createElement(
            Fragment, 
            null,
            [
                createElement(
                    'section', 
                    { className: 'header-signature', key: 'signature' },
                    [
                        createElement('h1', {key: 'name'}, 'Shawn Smith'),
                        createElement('h3', {key: 'title'}, 'Software Engineer'),
                    ]
                ),
                createElement(
                    'nav', 
                    {key: 'nav'},
                    [
                        createElement('a', {className: 'nav-link', key: 'home', href: '/'}, 'Home'),
                        createElement('a', {className: 'nav-link', key: 'about', href: '/about'}, 'About'),
                        createElement('a', {className: 'nav-link', key: 'portfolio', href: '/portfolio'}, 'Portfolio'),
                        createElement('a', {className: 'nav-link', key: 'blog', href: '/blog'}, 'Blog'),
                    ]
                )
            ]
        )
    )
}

module.exports = Header;