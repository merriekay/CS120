// Example 1: Short circuiting with &&

// Using && to check if both conditions are true
const result1 = true && false; // false
console.log(result1); // Output: false

// In the following example, the second condition is not evaluated because the first one is false.
const result2 = false && doSomething(); // doSomething() is not called
console.log(result2); // Output: false

// Example 2: Using && for conditional execution
const age = 25;
const hasLicense = true;

// Only call buyAlcohol() if the person is above 18 and has a valid license
if (age >= 18 && hasLicense) {
  console.log("can buy alcohol");
}

// In this case, if the person is not above 18, buyAlcohol() won't be called at all.

// Example 1: Short circuiting with ||

// Using || to check if either condition is true
const result3 = true || false; // true
console.log(result3); // Output: true

// In the following example, the second condition is not evaluated because the first one is true.
const result4 = true || doSomething(); // doSomething() is not called
console.log(result4); // Output: true

// Example 2: Providing default values
const firstName = null;
const defaultName = "Guest";

// If name is falsy (null or undefined), use defaultName instead
const displayName = firstName || defaultName;

console.log(displayName); // Output: 'Guest'
