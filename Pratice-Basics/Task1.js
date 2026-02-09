// find the postive and negative number ( function and if else pratice)

function TaskA(number) {
  if (number > 0) {
    return `${number} is positive number`;
  } else if (number < 0) {
    return `${number} is negative number`;
  } else {
    return `${number} is zero`;
  }
}

console.log(TaskA(-4));
