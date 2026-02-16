function task12(arr) {
  let maxCount = 0;
  let repeatedNumber = [];

  for (let i = 0; i < arr.length; i++) {
    let count = 0;

    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }

    if (count > maxCount) {
      maxCount = count;
      repeatedNumber = [arr[i]];
    } else if (count === maxCount && !repeatedNumber.includes(arr[i])) {
      repeatedNumber.push(arr[i]);
    }
  }

  return repeatedNumber;
}

console.log(task12([2, 4, 2, 4, 7]));
