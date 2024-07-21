// Activity 1: Selecting and Manipulating Elements

// Task 1: Select an HTML element by its ID and change its text content
const headingElem = document.getElementById('heading');
headingElem.textContent = 'Heading of the page got changed';

// Task 2: Select an HTML element by its class and change its background color
const subHeadingElem = document.querySelector('.subHeadingContainer');
subHeadingElem.style.backgroundColor = 'red';

// Activity 2: Creating and Appending Elements

// Task 3: Create a new div element with some text content and append it to the body
const newDivElem = document.createElement('div');
newDivElem.textContent = 'This is a div tag created by using DOM manipulation';
document.body.appendChild(newDivElem);

// Task 4: Create a new li element and add it to an existing ul list
const ulElem = document.querySelector('.ul-list');
const liElem = document.createElement('li');
liElem.textContent = 'item-3';
ulElem.appendChild(liElem);

// Activity 3: Removing Elements

// Task 5: Select an HTML element and remove it from the DOM
const ulElemToRemove = document.querySelector('.ul-list');
if (ulElemToRemove) {
    ulElemToRemove.remove();
}

// Task 6: Remove the last child of a specific HTML element
// Re-create the ul element since Task 5 removed it
const newUlElem = document.createElement('ul');
newUlElem.className = 'ul-list';
newUlElem.innerHTML = '<li>item-1</li><li>item-2</li><li>item-3</li>';
document.body.appendChild(newUlElem);

// Remove the last child of the new ul element
const ulElemForRemoval = document.querySelector('.ul-list');
if (ulElemForRemoval && ulElemForRemoval.lastChild) {
    ulElemForRemoval.removeChild(ulElemForRemoval.lastChild);
}

// Activity 4: Modifying Attributes and classes

// Task 7: Select an HTML element and change one of its attributes (eg. src of an imag tag)

const imgElem = document.querySelector('#random-img');

imgElem.src='img2.jpeg'

// Task 8: Add and remove a css class to/from an HTML element.
headingElem.classList.add('bg-cyan');

const subHeadingH2Elem = document.querySelector('.subHeadingContainer h2');
subHeadingH2Elem.classList.remove('italicStyle');

// Activity 5: Event Handling

// Task 9: Add a click event listener to a button that changes the text content of a paragraph.
const textElem = document.querySelector('.impText');
const btnElem = document.querySelector('#btn');
btnElem.addEventListener('click', () => {
    textElem.textContent='the text changed after clicking the button'
});

// Task 10: Add a mouseover event listener to an element that changes it border color
const borderElem = document.querySelector('.border');
borderElem.addEventListener('mouseover', () => {
    borderElem.style.borderColor='black'
})