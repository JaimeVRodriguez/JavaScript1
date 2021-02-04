// Return of sum of multiples of 3 & 5
// from 0 to "limit"

function sum(limit) {
    let sum = 0;

    for (let i = 0; i <= limit; i++)
        if (i % 5 === 0 || i % 3 === 0)
            sum += i;

    return sum;
}

console.log(sum(10));