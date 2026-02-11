function task4(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      count = count + 1;
    }
  }
  return count;
}

let positiveNumber = task4([-2, 5, -1, 7, 0, 3]);

console.log(positiveNumber);
