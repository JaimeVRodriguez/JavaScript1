const circle = {
    radius: 1,
    draw() {
        console.log('Draw');
    }
};

// Older technique
const anotherCircle = {};
for (let key in circle)
    anotherCircle[key] = circle[key];

console.log(anotherCircle);

// New technique
// Can also add new properties ie "color"
const thirdCircle = Object.assign({
    color: 'Blue'
}, circle);
console.log(thirdCircle);

// Simplest technique
const lastCircle = { ...circle };
console.log(lastCircle);