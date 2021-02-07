// Typical circle
// let radius = 1;
// let x = 1;
// let y = 1;
// Not efficient because all circles have the same attributes

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1,
    },
    isVisible: true,
    draw: function () { // A function in an object is a "method"
        console.log('Radius', circle.radius);
    }
};

circle.draw();