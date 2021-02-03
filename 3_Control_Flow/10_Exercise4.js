// Speed Limit = 70;
// 5 above limit = 1 pt
// More than 12 points = suspended

function checkSpeed(speed) {
    speedLimit = 70;
    speedPerPoint = 5;

    if (speed <= 70)
        console.log('Ok');
    else
        points = Math.floor((speed - speedLimit) / speedPerPoint);
    if (points >= 12)
        console.log('License Suspended');
    else
        console.log(`Points: ${points}`);
}

checkSpeed(76);
checkSpeed(92);
checkSpeed(180);