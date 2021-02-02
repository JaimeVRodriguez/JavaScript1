// While loops variable is declared externally

let i = 0;

while (i <= 5) {
    if (i % 2 !== 0) console.log(i);
    i++;
}

// Do-while
// Executes at least one time (even if first statement is "false")

let j = 9;
do {
    if (j % 2 !== 0) console.log(j);
    j++;
} while (j <= 5);