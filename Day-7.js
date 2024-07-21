// Activity 1: Object creation and access
// Task 1: Create an object representing a book with properties like title, author, and year, and log 
const book = {
    title: 'Harry Potter',
    author: 'JK Rowling ',
    year: 1997
}
console.log('Task 1', book);

// Task 2: access and log the title and author properties
console.log('Task 2', book.title);
console.log('Task 2', book.author)

// Activity 2: Object Method
// Task 3: Add a method to the book object that returns a string with book's title and author and log the result
book.info = function () {
    return `${this.title} by ${this.author}`;
}
console.log('Task 3', book.info());

// Task 4: Add a method to book object that takes parameter(year) and updates book's year property, and log updated obj
book.republish = function (year) {
    return this.year = year;
}
console.log('Task 4', book.republish(2001));

// Activity 3: Nested Objects
// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects);
const book1 = {
    title: 'Things Fall Apart',
    author: 'Chinua Achebe',
    year: 1958,
    info: function () {
        return `${this.title} by ${this.author}`;
    },
    republish: function (newYear) {
        return this.year = newYear;
    }
}
const book2 = {
    title: 'Things Fall Apart',
    author: 'Chinua Achebe',
    year: 1958,
    info: function () {
        return `${this.title} by ${this.author}`;
    },
    republish: function (newYear) {
        return this.year = newYear;
    }
}
const book3 = {
    title: 'The Divine Comedy',
    author: 'Dante Alighieri',
    year: 1315,
    info: function () {
        return `${this.title} by ${this.author}`;
    },
    republish: function (newYear) {
        return this.year = newYear;
    }
}


const library = {
    name: 'Tow Library',
    books: [
        book1,
        book2,
        book3
    ]
};

console.log('Task 5', library);


// Task 6: Access and log the name of the library and the titles of all books in library.
console.log(`Task 6 ${library.name}`);
library.books.forEach((book) => {
    console.log('Book titles', book.title);
});

// Activity 4:  this keyword
// Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method
book.getPublishYear = function() {
    return `${this.title}, was published in ${this.year}`;
}

console.log('Task 7', book.getPublishYear());

// Activity 5: Object Iteration
// Task 8: Use a for...in loop to iterate over the properties of book object and log each property and its value
for(key in book) {
    console.log(`${key} : ${book[key]}`);
};

// Task 9: use Object.keys and Object.values methods to log all the keys and values of the book object
console.log(Object.keys(book));
console.log(Object.values(book));
