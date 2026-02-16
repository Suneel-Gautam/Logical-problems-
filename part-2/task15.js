function task15(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      if (arr[i] + arr[j] === target) {
        return [arr[i], arr[j]];
      }
    }
  }
  return null;
}

// console.log(task15([2, 4, 3, 5, 7], 7));
console.log(task15([1, 2, 3, 4], 10));
