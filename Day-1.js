// Activity 1: Variable Declaration
//Task 1: Declare a variable using var, assign it a number, and log the value to the console.
var x = 10;
console.log(x);

//Task 1: Declare a variable using let, assign it a string, and log the value to the console.
let y = 'Hello world';
console.log(y);

// Activity 2: Contant Declaration
// Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.
const isValue = true;

//Activit 3: Data Types
// Task 4: Create variables of different data types(number, string, boolean, object, array) and log each variable's type using the typeof operator.
let numberVar = 10;
console.log(`type of numberVar is`, typeof(numberVar));

let stringVar = "this is string variable"
console.log(`type of stringVar is`, typeof(stringVar));

let booleanVar = false;
console.log(`type of booleanVar is`, typeof(booleanVar));

const obj = {
    name: 'Xyz',
    age: 25,
    isStudent: false
}
console.log(`type of obj variable is`, typeof(obj));

const arr = [10, 55, 'hey', true, '65'];
console.log(`type of arr variable is`, typeof(arr));

// Activity 4: Reassigning Variables
// Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.
let task5Var = 55;
console.log(`inital value of task5Var`, task5Var);
task5Var = 90;
console.log(` value after reassign task5Var`, task5Var);

// Activity 5: Understanding const
// Task 6: Try reassigning a variable declared with const and observe the error
const task6Var = 25;
// task6Var = 1;
// console.log(task6Var);
// Assignment to constant variable. i.e we can't reassign value to const after it is declared.