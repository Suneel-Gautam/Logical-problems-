///Problem
// You are given an array of numbers.
// Return the FIRST number that appears only ONCE
// If no such number exists, return -1
// Input:  [2, 4, 2, 5, 4, 7]

function task14(arr) {
  let number = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count = count + 1;
      }
    }
    if (!(count >= 2)) {
      number.push(arr[i]);
    }
  }
  return number;
}
let array = [2, 4, 2, 5, 4, 6, 8];
console.log(task14(array));
