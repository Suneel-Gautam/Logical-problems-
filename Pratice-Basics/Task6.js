/// check the number is divisible by 3 if divisible return fizz else reutrn buzz and else divided by both then fizzbuzz otherwise return number

function task6(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("fizzbuzz");
    } else if (i % 5 == 0) {
      console.log("buzz");
    } else if (i % 3 == 0) {
      console.log("fizz");
    } else {
      console.log(i);
    }
  }
}

task6(15);
