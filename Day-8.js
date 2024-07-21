// Activity 1: Template Literals
// Task 1: Use template literals to create a string that includes variables for person's name and age, and log the string 

const person = {
    name: 'Ajay',
    age: 25
}
console.log(`name: ${person.name}, age: ${person.age}`);

// Task 2: Create a multi-line string using template literals and log 
console.log(`using template literals
    we can print multiline string`);

// Activity 2: Destructuring 
// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log
const arr = [1, 2, 3, 4, 5];
const [first, second] = arr;

console.log('first elem', first);
console.log('second elem', second);

// Task 4: Use Object destructuring to extract the title and author from a book object and log them
const book = {
    title: 'Harry Potter',
    author: 'JK Rowling ',
    year: 1997
};

const {title, author} = book;
console.log('title:', title);
console.log('author:', author);

// Activity 3: Spread and Rest operators
// Task 5: Use spread operator to create a new array that includes all elements of an existing array plus additional elements and log
const newArr = [...arr, 55, 66, 77];
console.log(newArr);

// Task 6: Use rest operator in a function to accept an arbitary number of arguments, sum them, and return result
const sumOfNum = (...nums) => {
    let sum = 0;
    for(let num of nums) {
        sum += num;
    }
    return sum;
}
console.log(sumOfNum(1, 2, 3, 4, 5));
console.log(sumOfNum(5, 9, 5));

// Activity 4: Default Parameters
// Task 7: Write a function that takes two parameters and return their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter

const product = (num1, num2 = 1) => {
    return num1 * num2;
}
console.log('with 2 parameters', product(4, 5));
console.log('with default parameter', product(4))

// Activity 5: Enhanced Object Literals
// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
const heroName = 'Goku';
const age = 35;

const dbzCharacter = {
    heroName,
    age,
    intro() {
        console.log(`Hello, my name is ${this.heroName} and I'm ${this.age} year old, I like to fight with powerful person}`)
    },
}
console.log(dbzCharacter);
dbzCharacter.intro();

// Task 9: Create an object with computed property names based on variables and log the object to the console
const firstKey = 'firstName';
const secondKey = 'lastName';
const value1 = 'Alex';
const value2 = 'Watson';

const computedObj = {
    [firstKey]: value1,
    [secondKey]: value2
}

console.log('Task 9', computedObj);