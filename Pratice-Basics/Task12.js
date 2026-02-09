function task12(word) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] == "a" || word[i] == "A") {
      count = count + 1;
    } else if (word[i] == "e" || word[i] == "E") {
      count = count + 1;
    } else if (word[i] == "i" || word[i] == "I") {
      count = count + 1;
    } else if (word[i] == "o" || word[i] == "O") {
      count = count + 1;
    } else if (word[i] == "u" || word[i] == "U") {
      count = count + 1;
    }
  }
  return count;
}

console.log(task12("snl"));
