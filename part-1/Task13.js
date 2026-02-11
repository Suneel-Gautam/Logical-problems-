function task13(word) {
  let reverse = "";
  for (let i = word.length - 1; i >= 0; i--) {
    console.log(word[i]);
    reverse = reverse + word[i]
  }
  return reverse
}

console.log(task13("sunil"))
