// Logical AND
// Both must be true to return true
console.log(true && true);
console.log(true && false);

// Logical OR
// Just one must be true
console.log(true || false);

// Logical NOT
// !


let highIncome = true;
let goodCredit = false;

let eligibleForLoan = highIncome && goodCredit;
console.log('Eligible', eligibleForLoan);

let applicationRefused = !eligibleForLoan;
console.log('Application Refused', applicationRefused);


///////
// Non-Boolean Logical Operators

// Falsy (Will equate to false)
// undefined
// null
// 0
// false
// ''
// NaN

// Anything that is not Falsy = Truthy

let userColor = 'red';
let defaultColor = 'blue';
// If user selects a color use it
// If not choose d
let currentColor = userColor || defaultColor;

console.log(currentColor)