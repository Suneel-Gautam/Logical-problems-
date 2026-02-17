function task16(arr) {
  let mininumPrice = arr[0];
  let maxProfit = 0;
  for (let i = 0; i < arr.length; i++) {
    if (mininumPrice > arr[i]) {
      mininumPrice = arr[i];
    } else {
      let profit = arr[i] - mininumPrice;
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }

  return maxProfit;
}

console.log(task16([7, 1, 5, 3, 6, 4]));
