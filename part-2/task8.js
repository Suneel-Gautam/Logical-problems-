function task8(num) {
  for (let i = 1; i <= num; i++) {
    let mutiple = "" 
    for (let j = 1; j <= num; j++) {
      mutiple = mutiple + " " + i * j;
    }
    console.log(mutiple);
  }
}
task8(5);
