function task9(arr, target) {
  let sum = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      if (arr[i] + arr[j] === target) {
        let result = [arr[i], arr[j]];
        sum.push(result);
      }
    }
  }
 return sum
}

let num = task9([2, 4, 3, 5, 7], 7);

console.log(num)
