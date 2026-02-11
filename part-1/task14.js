function task14(number) {
  let oddCount = 0;
  let evenCount = 0;

  for (let i = 1; i <= number; i++) {
    if (i % 2 == 0) {
      evenCount = evenCount + 1;
    } else {
      oddCount = oddCount + 1;
    }
  }
  return { odd: oddCount, even: evenCount };
}

console.log(task14(10));
