// Step 4: Real-World JS Logic Challenges
// Challenge 1: Mini Shopping App Logic

// You have a list of products (name, price, quantity in cart):

// [
//   {name: "Shoes", price: 50, qty: 2},
//   {name: "Shirt", price: 30, qty: 3},
//   {name: "Watch", price: 80, qty: 1},
//   {name: "Hat", price: 20, qty: 4}
// ]
// Calculate total price per product (price * qty)
// Calculate grand total for the cart
// If grand total > $200, apply 15% discount
// Output a detailed receipt like:
// Shoes x2 = $100
// Shirt x3 = $90
// ...
// Grand Total after discount = $XYZ

function calcualte(arr) {
  let TotalPrice = 0;
  let Price = 0;
  let discount = 0;
  for (let i = 0; i < arr.length; i++) {
    Price = arr[i].price * arr[i].qty;
    console.log(`${arr[i].name} x ${arr[i].qty} = $${Price} `);
    TotalPrice = TotalPrice + Price;
  }
  if (TotalPrice > 200) {
    discount = (15 / 100) * TotalPrice;
  }
  console.log(`Grand Total = ${TotalPrice}`);
  console.log(`Applied Discount = ${discount}`);
  console.log(`Grand Total Price after discount = $${TotalPrice - discount}`);
}

calcualte([
  { name: "Shoes", price: 50, qty: 2 },
  { name: "Shirt", price: 30, qty: 3 },
  { name: "Watch", price: 80, qty: 4 },
  { name: "Hat", price: 20, qty: 4 },
]);
