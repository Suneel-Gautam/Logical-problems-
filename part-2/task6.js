function task6(arr) {
  let largestNum = arr[0];
  let secondLargestNum = arr[1];
  for (let i = 1; i < arr.length; i++) {
    if (largestNum < arr[i]) {
      largestNum = arr[i];
    }

    if (secondLargestNum < arr[i ] && arr[i] < largestNum) {
      secondLargestNum = arr[i];
    }
  }

  return secondLargestNum;
}

let secondLargestNumber = task6([12, 5, 8, 20, 15]);
console.log(secondLargestNumber);
