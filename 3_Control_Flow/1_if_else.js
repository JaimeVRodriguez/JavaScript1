// Hour
// If hour is between 6am and 12pm: good morning
// 12 and 5pm: good afternoon
// Otherwise: good evening

let hour = 10;

if (hour >= 6 && hour < 12)
    console.log('Good morning');
else if (hour >= 12 && hour < 18)
    console.log('Good afternoon');
else
    console.log('Good evening');