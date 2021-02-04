// count the number of "truthy" values

function countTruthy(array) {
    count = 0;

    for (let item of array)
        if (item)
            count++;

    console.log(count);
}

let array1 = [0, 1, 2, 3];
let array2 = ['', 'a', 4, NaN];

countTruthy(array1);
countTruthy(array2);