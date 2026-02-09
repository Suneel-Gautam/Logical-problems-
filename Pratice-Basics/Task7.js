/// function check odd even from number 1 to n

function task7(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      console.log(`${i} number is even`);
    } else {
      console.log(`${i} number is odd`);
    }
  }
}

task7(10);
