console.log("versi1");
for (let i = 0; i < 10; i++) {
    let line = '';
    for (let j = 1; j <= 10; j++) {
      line += j + ' ';
    }
    console.log(line.trim());
  }
  console.log("");
  console.log("");

  console.log("versi2");
  for (let i = 0; i < 10; i++) {
    let line = '';
    for (let j = 0; j < 10; j++) {
      line += '#';
    }
    console.log(line);
  }