function task11(password) {
  if (password.length < 6) {
    return "Weak";
  } else if (password.length >= 6 && password.length <= 10) {
    return "Medium";
  } else {
    return "Strong";
  }
}

console.log(task11("Sunil"))
