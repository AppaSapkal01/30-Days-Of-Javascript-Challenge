// Activity 1: function declaration
// Task 1: write a function to check if number is even or odd

  function isEvenOrOdd(num) {
    if(num % 2 == 0) {
        console.log(`${num} is even`)
    } else {
        console.log(`${num} is odd`)
    }
};
isEvenOrOdd(65);

// Task 2: function to calculate square of number

 function squareOfNum (num) {
    return num * num;
}

console.log(squareOfNum(5));

// Activity 2: Function Expression
//Task 2: function expression to find max of two numbers and log

const maxBetweenTwoNum = function(a, b) {
    let max =  a > b ? a : b;
    console.log(max);
}

maxBetweenTwoNum(5, 5)

// Task 4: function expression to concatenate two strings and return the result
const concatenateString = function(str1, str2) {
    return str1 + str2;
}

console.log(concatenateString('hello', 'world'));


// Activity 3: Arrow function
// Task 5: write an arrow function to calculate sum of two numbers and return the result

const sum = (num1, num2) => {
    return num1 + num2;
}

const result = sum(5, 9);
console.log(result);

//Task 6: arrow function to check if string contains a specific character and return a boolean
const containsChar = (str, ch) => {
    return str.includes(ch);
}

console.log(containsChar('Hello world@', 'p'));

// Activity 4: functions Parameters and default values
// Task 7: function takes two parameters and return their product and provide default value for second parameter
const getProduct = (num1, num2 = 1) => {
    return num1 * num2;
};

console.log(getProduct(10, 5));
console.log(getProduct(10))

// Task 8; function takes a person's name and age and return geeting message, provide a default value for the age
const greeting = (name, age = 25) => {
    return `Hello, ${name}! You are ${age} years old.`;
}

console.log(greeting('Alex', 46));
console.log(greeting('Ajay'))


// Activity 5: Higher-order functions
// Task 9: write a higher order function that takes a function and a number and calls the function that many times

const callFunctionMultipleTimes = (cb, x) => {
    while(x > 0) {
        cb();
        x--;
    }
}

const cb = () => {
    console.log('this is callback func')
}

callFunctionMultipleTimes(cb, 5);

// Task 10:  higher-order function that takes two functions and a value as parameters. The function will apply the first function to the provided value and then apply the second function to the result of the first function

const mainFunction = (func1, func2, value) => {
    const resultFromFunc1 = func1(value);
    return func2(resultFromFunc1);
}

const addOne = (value) => {
    return value + 1
}

const multiplyBy5 = (value) => {
    return value * 5;
};

const finalResult = mainFunction(addOne, multiplyBy5, 50)