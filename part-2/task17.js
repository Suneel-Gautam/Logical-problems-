function task17(arr) {
  let fristNumber = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (fristNumber < arr[i]) {
      fristNumber = arr[i];
    } else {
      return false;
    }
  }
  return true;
}

console.log(task17([1, 2,  3]));
