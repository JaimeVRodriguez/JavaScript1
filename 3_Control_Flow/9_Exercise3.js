// FizzBuzz
// If divisible by 5 = Buzz
// If divisible by 3 = Fizz
// If divisible by both = FizzBuzz
// All else return number

function fizzBuzz(input) {
    if (typeof input === 'number')
        if (input % 15 === 0) return 'FizzBuzz';
        else if (input % 5 === 0) return 'Buzz';
        else if (input % 3 === 0) return 'Fizz';
        else return input;
    else
        return 'Not a number'
}

console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(2));
console.log(fizzBuzz('8'));

