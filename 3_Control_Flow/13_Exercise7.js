// display all properties of type string

const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
};

const player = {
    name: 'c',
    number: 9,
    position: 'd'
};

function showProperties(obj) {

    for (let key in obj)
        if (typeof obj[key] === 'string')
            console.log(key, obj[key]);
}

showProperties(movie);
showProperties(player);