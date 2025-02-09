// Example Program to demonstrate
// Example Program: Demonstrating various array methods
let numbers = [10, 20, 30, 40, 50];

// 1. push() - Add an element at the end
numbers.push(60);
console.log("After push:", numbers); // [10, 20, 30, 40, 50, 60]

// 2. pop() - Remove the last element
numbers.pop();
console.log("After pop:", numbers); // [10, 20, 30, 40, 50]

// 3. unshift() - Add an element at the beginning
numbers.unshift(0);
console.log("After unshift:", numbers); // [0, 10, 20, 30, 40, 50]

// 4. shift() - Remove the first element
numbers.shift();
console.log("After shift:", numbers); // [10, 20, 30, 40, 50]

// 5. map() - Create a new array by multiplying each element by 2
let doubled = numbers.map(num => num * 2);
console.log("After map (doubled):", doubled); // [20, 40, 60, 80, 100]

// 6. filter() - Create a new array with numbers greater than 25
let filtered = numbers.filter(num => num > 25);
console.log("After filter (greater than 25):", filtered); // [30, 40, 50]

// 7. reduce() - Sum all elements in the array
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("After reduce (sum):", sum); // 150

// 8. find() - Find the first number greater than 35
let found = numbers.find(num => num > 35);
console.log("After find (greater than 35):", found); // 40

// 9. forEach() - Log each element to the console
console.log("Using forEach:");
numbers.forEach(num => console.log(num)); // Logs each number in the array

// 10. sort() - Sort the array in ascending order
numbers.sort((a, b) => a - b);
console.log("After sort (ascending):", numbers); // [10, 20, 30, 40, 50]

let fruits = ["apple", "banana", "mango", "orange"];
delete fruits[1];  // Removes "banana"
console.log(fruits);  // ["apple", undefined, "mango", "orange"]
console.log(fruits.length);  // 4 (length remains unchanged)

