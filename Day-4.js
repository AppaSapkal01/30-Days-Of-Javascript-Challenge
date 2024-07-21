// Activity 1: For Loop
// Task 1: print numbers from 1 to 10
for(let i = 1; i <= 10; i++) {
    console.log(i);
}

// Task 2: table of 5 using loop
for(let i = 5; i <= 50; i+=5) {
    console.log(i);
}

// Activity 2: While loop
// Task 3: calculate sum of num from 1 to 10 using while loop
let num = 10;
let sum = 0;
while(num > 0) {
    sum += num;
    num--;
}

console.log(sum);

// Task 4: print numbers from 10 to 1 using while
let x = 10
while (x > 0) {
    console.log(x);
    x--;
}

// Activity 3: Do...while loop
// Task 5: print numbers from 1 to 5 using do while
let y = 1;
do {
    console.log(y);
    y++;
} while (y <= 5);

// Task 6: calculate factorial of number using do while
let number = 5;
let fact = 1;
do {
    fact *= number;
    number--;
} while (number > 0);

console.log(fact)


// Activity 4: Nested loop
// Task 7: print right angle triangle
for(let i = 1; i <= 5; i++) {
    let stars = ''
    for(let j = 1; j <= i; j++) {
        stars += '*'
    }
    console.log(stars)
}

// Activity 5: loop control statements
// Task 8: print numbers from 1 to 10 but skip 5 using continue;
for (let i = 1; i <= 10; i++) {
    if(i === 5) 
        continue
    console.log(i)
}

// Task 9: print numbers from 1 to 10 but stop the loop when the number is 7 using break;
for (let i = 1; i <= 10; i++) {
    if(i === 7) 
        break;
    console.log(i)
}