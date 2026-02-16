function task7(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
      row = row + "*";
    }
    console.log(row);
  }
}

task7(5);
