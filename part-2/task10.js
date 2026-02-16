function task10(arr) {
  let maxCount = 0;
  let repeatedNumbers = null;
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count = count + 1;
      }
    }
    if (count > maxCount) {
      maxCount = count;
      repeatedNumbers = arr[i];
    }
  }

  return repeatedNumbers;
}

console.log(task10([2, 4, 2, 5, 7, 2, 4]));
