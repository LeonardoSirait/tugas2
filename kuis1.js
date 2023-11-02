let i = 1;
do {
    if (i % 2 === 0) {
        if (i % 3 === 0) {
            console.log(i + ' - I Love Coding');
        } else {
            console.log(i + ' - Berkualitas');
        }
    } else {
        console.log(i + ' - Santai');
    }
    i++;
} while (i <= 20);


