// // Step 1: Demonstrate single Selections using getElementById() and querySelector()

// /*  
// .getElementById()
// - Any valid ID will work
// - No need for the # CSS selector, just the name of the ID
// */
const logoTitle = document.getElementById('logo-title');

console.log(logoTitle);
console.dir(logoTitle);

// Always log the result to showcase the element is indeed what you thought it was.

 /*  querySelector()
// - Any valid CSS selector will work but you MUST use the selector for the argument
// - Be careful to mention that it finds the FIRST matching selection.  This can be an issue of developers forget and have multiple class names.
// */
const firstTitle = document.querySelector('.card-title');

console.log(firstTitle);

// Step 2: Review methods that return a multiple selections in the form of a HTMLCollection
const links = document.getElementsByTagName('a');
console.log(links);

const menuItem = document.getElementsByClassName('menu-item');
console.log(menuItem);
// Note that you must show the true console in your browser window because the result will be a HTMLCollection and is too large for codepen.
// You can target specific elements by using the array-like syntax of a HTMLCollection

// Step 3: Review methods that return a multiple selections in the form of a NodeList
// const cardTitle = document.querySelectorAll('.card-title');
// console.log(cardTitle);

// Step 4: Talk about the differences between HTMLCollection and NodeList by showing a HTMLCollection and a NodeList on top of each other in the console.  Point out that HTMLCollections are faster by their nature but that NodeLists allow for the use of forEach() without converting to an Array.

// // Example of forEach on our NodeList changing all matching elements.


// // Convert HTMLColletion to an Array.  Take time to showcase the __proto__ for the respective console logs between HTMLCollection, NodeList, and Array.  Point out the methods in each example.
// // ✅
// // getElementsbyClassName;


// Step 5: DOM manipulation
// for loop
// const cardTitles = document.getElementsByClassName('card-title');
// console.log(cardTitles);
// for(let i = 0; i < cardTitles.length; i ++) {
//     cardTitles[i].style.color = "silver";
// }

// using forEach
const cardTitles = document.querySelectorAll('.card-title');
cardTitles.forEach(element => {
    element.style.color = "blue";
})

// Turning an HTMLcollection into an Array
// Array.from takes a nodelist and turns it into an array for you to forEach or loop over
Array.from(links).forEach((link) => {
    // do something
    link.style.color = 'hotpink'
    link.textContent = "These are arrays!"
})

const dogImg = document.querySelector('.card-img-top');
dogImg.src = 'https://images.unsplash.com/photo-1499789853431-fcbf274f57b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ';
dogImg.alt = 'Bestest boy in a field';

const title = document.querySelector('h2');
title.textContent = "Dogs are amazing!";

// Step 6: DOM Style
//  anything with a - needs to be camel cased.  eg: background-color should be style.backgroundColor



// Step 7: classList manipulation, we will remove a class called ".extra-stuff" from our DOM.
// // Note that classList returns a DOMTokenList which gives us some unique methods.
const lastCard = document.querySelector('.extra-stuff');
lastCard.classList.remove('extra-stuff');


// Step 8: Creating new DOM elements in JS only
// Creating a new element, adding content, and adding it to browser
// Item Creation Step 1: create a new element
const newContent = document.createElement('footer');

// Item Creation Step 2: add some content to the newly created div
newContent.textContent = "Website made by Christina Gorton";
newContent.classList.add('footer');

// Item Creation Step 3: prepend or append the element to an existing DOM node on the page
// in order to append/prepend you must grab the element first
const parentElement = document.querySelector("body");
// prepend sends it to the top of the element
// parentElement.prepend(newContent);

// append sends it to the bottom
parentElement.append(newContent);




