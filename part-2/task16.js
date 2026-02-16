function task16(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return arr[i] - arr[i + 1];
    }
  }
  return 0
}

console.log(task16([7, 1, 5, 3, 6, 4]));
