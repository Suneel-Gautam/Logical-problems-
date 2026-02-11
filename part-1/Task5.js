/// check the number is divisible by 3 if divisible return fizz otherwise return number

function task5(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0) {
      console.log("fizz");
    } else {
      console.log(i);
    }
  }
}

task5(10);
