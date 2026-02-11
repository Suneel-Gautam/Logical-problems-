function task5(arr) {
  let largestNum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (largestNum < arr[i]) {
      largestNum = arr[i];
    }
  }
  return largestNum
}


let LargestNumber = task5([3, 7, 2, 9, 5])

console.log(LargestNumber)
