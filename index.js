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

// Note that you must show the true console in your browser window because the result will be a HTMLCollection and is too large for codepen.


// You can target specific elements by using the array-like syntax of a HTMLCollection


// Step 3: Review methods that return a multiple selections in the form of a NodeList


// Step 4: Talk about the differences between HTMLCollection and NodeList by showing a HTMLCollection and a NodeList on top of each other in the console.  Point out that HTMLCollections are faster by their nature but that NodeLists allow for the use of forEach() without converting to an Array.

// // Example of forEach on our NodeList changing all matching elements.


// // Convert HTMLColletion to an Array.  Take time to showcase the __proto__ for the respective console logs between HTMLCollection, NodeList, and Array.  Point out the methods in each example.
// // ✅
// // getElementsbyClassName;


// // Step 5: DOM manipulation


// Step 6: DOM Style
//  anything with a - needs to be camel cased.  eg: background-color should be style.backgroundColor



// Step 7: classList manipulation, we will remove a class called ".extra-stuff" from our DOM.

// // Note that classList returns a DOMTokenList which gives us some unique methods.



// Step 8: Creating new DOM elements in JS only

// Creating a new element, adding content, and adding it to browser

// Item Creation Step 1: create a new element



// Item Creation Step 2: add some content to the newly created div



// Item Creation Step 3: prepend or append the element to an existing DOM node on the page





