function task15(number) {
  const numberConvert = number.toString();
  let maxNumber = numberConvert[0];
  for (let i = 1; i < numberConvert.length; i++) {
    if (maxNumber < numberConvert[i]) {
      maxNumber = numberConvert[i];
    }
  }
  return maxNumber;
}

console.log(task15(324326423423));
