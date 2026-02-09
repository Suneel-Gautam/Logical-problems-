/// find the odd and even number

function task2(n) {
  if (n % 2 == 0) {
    return `${n} is even number`;
  } else {
    return `${n} is odd number`;
  }
}

console.log(task2(5))
