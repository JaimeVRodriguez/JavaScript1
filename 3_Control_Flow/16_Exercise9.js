// Show number of stars for each corresponding row

function showStars(rows) {

    for (let i = 1; i <= rows; i++)
        console.log('*'.repeat(i));
}

showStars(4);