// Example array
const numbers = [1, 2, 3, 4, 5];

// Using map to double each number in the array
const doubledNumbers = numbers.map(num => num * 2);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// Using map to convert array of strings to uppercase
const fruits = ['apple', 'banana', 'orange'];

const capitalizedFruits = fruits.map(fruit => fruit.toUpperCase());

console.log(capitalizedFruits); // Output: ['APPLE', 'BANANA', 'ORANGE']

// Using map to extract specific properties from an array of objects
const users = [
  { id: 1, name: 'John', age: 30 },
  { id: 2, name: 'Alice', age: 25 },
  { id: 3, name: 'Bob', age: 35 }
];

const userIds = users.map(user => user.id);

console.log(userIds); // Output: [1, 2, 3]
