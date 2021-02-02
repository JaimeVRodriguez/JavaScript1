// Write function that takes two numbers
// and returns the maximum of the two

function maxNumber(num1, num2) {
    if (num1 > num2)
        return (num1);
    else
        return (num2);
}

console.log(maxNumber(1, 2));
console.log(maxNumber(3, 8));
console.log(maxNumber(4, 4));



// Optimized
function max(num1, num2) {
    return (num1 > num2) ? num1 : num2;
}