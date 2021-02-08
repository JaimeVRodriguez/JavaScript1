// This approach is messy and 'cluttered'
const message =
    'This is my\n' +
    '\'first\' message';

// Template 
const another = `This is my
'first' message`;

console.log(message);
console.log(another);


// Real world example
let userName = 'Gunner';
const email =
    `Hi ${userName},

Thank you for joining my mailing list.

Regard,
Jaime`;

console.log(email);