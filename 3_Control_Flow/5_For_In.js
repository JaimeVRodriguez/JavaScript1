const person = {
    name: 'Jaime',
    age: 34
};

for (let key in person)
    console.log(key, person[key]);


const colors = ['red', 'green', 'blue'];

for (let index in colors)
    console.log(index, colors[index]);