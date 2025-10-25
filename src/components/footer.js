const { createElement, Fragment } = require('react');

const links = [
    {
        href: "https://linkedin.com/in/sds-smith",
        title: 'LinkedIn',
        url: 'linkedin.com/in/sds-smith'
    },
    {
        href: "https://github.com/sds-smith",
        title: 'Github',
        url: 'github.com/sds-smith'
    },
    {
        href: "https://stackoverflow.com/users/20012607/sds-smith",
        title: 'StackOverflow',
        url: 'stackoverflow.com/users/20012607/sds-smith'
    },
    {
        href: "mailto:sds.smith24@gmail.com",
        title: 'Email',
        url: 'sds.smith24@gmaill.com'
    },
]

function Footer() {
    return (
        createElement(
            Fragment, 
            null,
            links.map(({href, title, url}) => (
                createElement(
                    'a',
                    { 
                        href,
                        key: href,
                        target: '_blank'
                    },
                    [
                        createElement(
                            'div',
                            { className: 'footer-link' },
                            [
                                createElement(
                                    'h4',
                                    { key: title },
                                    title
                                ),
                                createElement(
                                    'h5',
                                    { key: url },
                                    url
                                ),
                            ]
                        ),
                    ]
                )
            ))
        )
    )
}

module.exports = Footer;