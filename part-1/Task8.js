function task8(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      count = count + 1;
    }
  }
  return count;
}

console.log(task8(10));
