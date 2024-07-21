//Activity 1: Arithmetic Operations
//Task 1: write a program to add two numbers and log result
let num1 = 55;
let num2 = 10;
let sum = num1 + num2
console.log('task 1 addition result ', sum);

//Task 2: write a program to subtract two numbers and log result
let subtract = num1 - num2;
console.log('task 2 subtraction result ', subtract);

//Task 3: write a program to multiply two numbers and log result
let multi = num1 * num2;
console.log('task 3 multiply result ', multi);

//Task 4: write a program to divide two numbers and log result
let divide = num1 / num2;
console.log('task 4 divide result', divide);

//Task 5: write a program to reamider two numbers and log result
let remainder = num1 % num2;
console.log('task 5 remainder ', remainder)

// Acitivity 2: Assignment Operators
// Task 6: Use += operator to add a number
let task6Var = 50;
task6Var += 10;
console.log('task6Var', task6Var);

// Task 7: Use -= operator to subtract a number
let task7Var = 75;
task7Var -= 65;
console.log('task7Var', task7Var);

// Activity 3: Comparison Operators
//Task 8: compare two numbers using > and <
let graterThan = num1 > num2;
console.log('graterThan ', graterThan);

let lowerThan = num1 < num2;
console.log('lowerThan ', lowerThan);

// Task 9: Compare two numbers using >= and <=
let graterThanEqualTo = num1 >= num2;
console.log('graterThanEqualTo ', graterThanEqualTo);

let lowerThanEqualTo = num1 <= num2;
console.log('lowerThanEqualTo ', lowerThanEqualTo);

// Task 10: Compare two numbers using == and ===
let n = 5;
let m = '5';

let doubleEqual = n == m;
console.log('doubleEqual ', doubleEqual);

let trippleEqual = n === m;
console.log('trippleEqual ', trippleEqual)

// Activity 4: Logical Operators;
//Task 11: use && operator to combine two conditions and log 
let x = 5, y = 10;
console.log('task 11', x < y && y === 10) // returns true cause true && true => returns true
console.log('task 11 part 2', x > y && y === 10) // returns false cause false && true => false
//Note - && operator means both of conditions should be true, if one of the condition is false it will return false


//Task 12: use || operator to combine two conditions and log 
console.log('task 12', x < y || y === 10) // returns true cause true || true => returns true
console.log('task 12 part 2', x > y || y === 15) // returns false cause false || false => false
//Note - || operator means any of the condition is true it will return true

// Task 13: use ! operator to negate 
console.log('task 13 ', x !== 5);

// Activity 5: Ternary Operator 
// Task 15: use ternary operator to check if number is positive or negative

console.log('task 15 ', x > 0 ? 'positive' : 'negative')


