// Traditional function
function add(a, b) {
  return a + b;
}

console.log(add(3, 5)); // Output: 8

// Arrow function
const multiply = (x, y) => {
  return x * y;
};

console.log(multiply(4, 6)); // Output: 24

// Arrow function with implicit return
const subtract = (m, n) => m - n;

console.log(subtract(10, 7)); // Output: 3

// Arrow function with single parameter
const square = (x) => x * x;

console.log(square(9)); // Output: 81
