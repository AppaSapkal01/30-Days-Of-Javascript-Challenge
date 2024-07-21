// Activity 1: if-else Statements
// Task 1: check if number is positive, negative or zero

let num = 15;
if (num > 0) {
    console.log(`${num} is positive`);
} else if (num < 0) {
    console.log(`${num} is negative`);
} else {
    console.log(`${num} is zero`);
}

// Task 2: check if a person is eligible to vote 
let age = 31;
if(age >= 18) {
    console.log(`you're eligible to vote`)
} else {
    console.log(`you're not eligible to vote`)
}

// Activity 2: Nested if-else 
// Task 3: find largest number using nested if-else

const num1 = 10;
const num2 = 20;
const num3 = 30;

let largest;

if(num1 > num2) {
    if (num1 > num3) {
        largest = num1;
    } else {
        largest = num3;
    }
} else {
    if(num2 > num3) {
        largest = num2;
    } else {
        largest = num3;
    }
}

console.log('largest number ', largest)


//Acitvity 3: Switch Case
// Task 4: day of week based on a number (1 - 7)

let day = 5;

switch (day) {
    case 1: 
        console.log('Monday');
        break;
    case 2: 
        console.log('Tuesday');
        break;
    case 3: 
        console.log('Wednesday');
        break;
    case 4: 
        console.log('Thursday');
        break;
    case 5: 
        console.log('Friday');
        break;
    case 6: 
        console.log('Saturday');
        break;
    case 7: 
        console.log('Sunday');
        break;
    default: 
        console.log('Invalid day')
}

// Task 5: give grade based on scores

let marks = 75;

switch(true) {
    case (marks >= 90) :
        console.log('A');
        break;
    case (marks >= 80) :
        console.log('B');
        break;
    case (marks >= 70) :
        console.log('C');
        break;
    case (marks >= 60) :
        console.log('D');
        break;
    case (marks >= 50) :
        console.log('F');
        break;
    default : 
        console.log(`you're failed`)
}

// Activity 4: Conditional (Ternary) Operator
// Task 6: use ternary to check if number is even or odd
let result = num % 2 == 0 ? 'Even' : 'Odd'
console.log(result);

// Activity 5: Combining Conditions
// Task 7: check leap year

let year = 1990;
if( year % 4 == 0) {
    if(year % 100 == 0) {
        if(year % 400 == 0) {
            console.log(`${year} is leap year`)
        } else {
            console.log(`${year} is not a leap year`)
        }
    } 
    console.log(`${year} is leap year`)
} else {
    console.log(`${year} is not a leap year`)
}
