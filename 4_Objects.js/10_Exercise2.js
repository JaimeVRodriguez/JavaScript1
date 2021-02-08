// create address object 
// with a factory and constructor function

function factoryAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}

function constructorAddress(street, city, zipCode) {
    this.street = street
    this.city = city;
    this.zipCode = zipCode;
}

let address1 = factoryAddress('124 Road', 'City', 98902);
let address2 = new ConstructorAddress('199 Street', 'Town', 28314);

console.log(address1);
console.log(address2);