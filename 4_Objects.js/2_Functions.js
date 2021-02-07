// Factory Function
function createCircle(radius) {
    return {
        radius, // equivalent to radius: radius,

        draw() {
            console.log('Radius', circle.radius);
        }
    };
}


const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2)


// Constructor Function
function Circle(radius) {
    this.radius = radius;

    this.draw = function () {
        console.log('Radius', circle.radius);
    }
}

const circle = new Circle(3);
console.log(circle);
circle.draw();