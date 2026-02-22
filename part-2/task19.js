function task19(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i] * 2;
    newArray.push(item);
  }
  return newArray
}
console.log(task19([1, 2, 3]))
