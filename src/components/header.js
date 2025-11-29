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
                createElement(Hamburger, {key: 'hamburger'}), 
                createElement(
                    'div',
                    {key: 'backdrop', id: 'nav-backdrop'},
                ),
                createElement(
                    'nav', 
                    {key: 'nav'},
                    [
                        createElement('a', {className: 'nav-link', id: 'home-nav-link', key: 'home', href: '/'}, 'Home'),
                        createElement('a', {className: 'nav-link', id: 'about-nav-link', key: 'about', href: '/about'}, 'About'),
                        createElement('a', {className: 'nav-link', id: 'portfolio-nav-link', key: 'portfolio', href: '/portfolio'}, 'Portfolio'),
                        createElement('a', {className: 'nav-link', id: 'blog-nav-link', key: 'blog', href: '/blog'}, 'Blog'),
                    ]
                )
            ]
        )
    )
}

function Hamburger() {
    return createElement(
        'div',
        { id: "hamburger" },
        [
            createElement(
                'label',
                { htmlFor: 'menu', tabIndex: '0', key: 'label' },
                [
                    createElement(
                        'span',
                        { className: "material-symbols-outlined menu", key: 'menu' },
                        'menu'
                    ),
                    createElement(
                        'span',
                        { className: "material-symbols-outlined close", key: 'close' },
                        'close'
                    ),
                ]
            ),
            createElement(
                'input',
                { id: 'menu', type: 'checkbox', key: 'checkbox' },
            )
        ]
    )
}

module.exports = Header;