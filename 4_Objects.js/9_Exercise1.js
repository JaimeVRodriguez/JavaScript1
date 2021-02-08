// Create address object with
// street
// city
// zipCode
// function that shows the address


const address = {
    street: '166 Gatsby Drive',
    city: 'Raeford',
    zipCode: 28376
};

function showAddress(object) {
    for (let item in object)
        console.log(item, object[item])
};

showAddress(address);