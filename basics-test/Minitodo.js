function minitodo(arr) {
  let thirdValue = null;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i].priority < arr[j].priority) {
        thirdValue = arr[i];
        arr[i] = arr[j];
        arr[j] = thirdValue;
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    console.log(`${i + 1}. ${arr[i].task} priority(${arr[i].priority})`);
  }
}

minitodo([
  { task: "Buy groceries", priority: 3 },
  { task: "Clean room", priority: 1 },
  { task: "Pay bills", priority: 4 },
  { task: "Study JS", priority: 2 },
]);
