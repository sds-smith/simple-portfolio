const { createElement } = require("react");

function GeometricBackground() {
    return (
        createElement(
            'div',
            { className: "geometric-background" },
            [
                createElement(
                    'div',
                    { className: "shape circle", id: "circle1", key: "circle1" }
                ),
                createElement(
                    'div',
                    { className: "shape circle", id: "circle2", key: "circle2" }
                ),
            ]
        )
    )
}

module.exports = GeometricBackground;