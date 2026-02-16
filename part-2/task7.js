function task7(n) {
  let row = "";
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < i; j++) {
      row = row + "*";
      console.log(row);
    }
  }
}

task7(5);
