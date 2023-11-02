for (let i = 1; i <= 7; i++) {
    let line = '';
    for (let j = 1; j <= 7; j++) {
        if (i % 2 === 0) {
            line += '#  ';
        } else {
            line += '  #';
        }
    }
    console.log(line);
}
