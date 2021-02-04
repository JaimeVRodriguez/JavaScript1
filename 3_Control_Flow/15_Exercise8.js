// Calculate the average grade
// and assign a letter grade

// 1-59 = F
// 60-69 = D
// 70-79 = C
// 80-89 = B
// 90-100 = A

function calculateAverage(array) {
    let total = 0;

    for (let item of array)
        total += item;

    return total / array.length;
}

function calculateGrade(marksArray) {
    let average = calculateAverage(marksArray);

    if (average >= 90 && average <= 100)
        return 'A';
    else if (average >= 80 && average <= 89)
        return 'B';
    else if (average >= 70 && average <= 79)
        return 'C';
    else if (average >= 60 && average <= 69)
        return 'D';
    else if (average <= 59)
        return 'F';
}

const array1 = [80, 80, 50];

console.log(calculateGrade(array1));


