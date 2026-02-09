/// find the greater number among two numbers

function task3(n1, n2) {
  if (n1 > n2) {
    return `${n1} is greater number`;
  } else if (n2 > n1) {
    return `${n2} is greater number`;
  } else {
    return `Both numbers are same `;
  }
}

console.log(task3(18, 18));
