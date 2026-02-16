function task11(arr) {
  let reaptedNumber = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count = count + 1;
      }
    }
    if (count >= 2 && !reaptedNumber.includes(arr[i])) {
      reaptedNumber.push(arr[i]);
    }
  }
  return reaptedNumber;
}

console.log(task11([2, 4, 2, 5, 7, 2, 4, 7]));
