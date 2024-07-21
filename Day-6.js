// Activity 1: Array Creation and Access
// Task 1: Create an array of numbers from 1 to 5 and log the array
const arr = [1, 2, 3, 4, 5];
console.log('Task 1', arr);

// Task 2: Access the first and last elements of the array and log;
console.log('Task 2', arr[0]);
console.log('Task 2', arr[arr.length - 1]);

// Activity 2: Array Methods(Basic)
// Task 3: use push() method to add new number to the end and log
arr.push(6);
console.log('Task 3', arr);

// Task 4: use pop() method to remove the last element from array and log
arr.pop();
console.log('Task 4', arr);

// Task 5: use shift() method to remove the first element and log
arr.shift();
console.log('Task 5', arr);

// Task 6: use unshift() method to add new number at beginning of array and log
arr.unshift(1);
console.log('Task 6', arr);


// Activity 3: Array methods(intermediate)
// Task 7: use map() to create new array where each number is double and log
const newArr = arr.map((num) => num * 2);
console.log('Task 7', newArr);

// Task 8: use filter() to create a new array with only even numbers and log
const filterArr = arr.filter((num) => num % 2 == 0);
console.log('Task 8', filterArr);

// Task 9: use reduce() to calculate the sum of all numbers and log
const reduceArr = arr.reduce((total, num) => total + num, 0);
console.log(reduceArr);

// Activity 4: Array Iteration
// Task 10: use for loop to iterate over array and log;
for(let i = 0; i < arr.length; i++) {
    console.log('iterating using for', arr[i]);
}

// Task 11: use forEach method to iterate over array and log
arr.forEach((num) => console.log('iterating using forEach', num));


// Activity 5: Multi-dimensional Arrays
// Task 12: Create two dimensional array and log entier array
const twoDArr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log('Task 12', twoDArr);

// Task 13: access and log a specific element from 2-D array
console.log('Task 13', twoDArr[1][2]);