function task2(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    sum = sum + element;
  }
  return sum
}

console.log(task2([1, 2, 3, 4, 5, 6, 7, 8, 9]))
