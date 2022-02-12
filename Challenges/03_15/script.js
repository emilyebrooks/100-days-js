/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objects by calling their properties and using their methods in the console.
 */

import Books from "./Books.js";

//Book param order: title, numPages, category, hardCover, read, dateRead, shelf
const book1 = new Books(
  "Savor", 
  276, 
  "Christian",
  true,
  true,
  "May 15, 2004",
  "top"
);

const book2 = new Books(
  "Joy of Cooking",
  879,
  "Cooking Instruction",
  true,
  true,
  "December 30, 2018",
  "middle"
);

const book3 = new Books (
  "Left for Dead",
  356,
  "Non Fiction",
  false,
  true,
  "August 29, 2014",
  "bottom"
);

console.log(`I read ${book1.title} on ${book1.dateRead}.`); 
console.log(`I read ${book2.title} on ${book2.dateRead}.`);
console.log(`The book ${book3.title} is a ${book3.category} book.`);
 
console.log(`The book ${book1.title} started on the ${book1.shelf} shelf.`);

book1.changeShelf("bottom");

console.log(`The book ${book1.title} was moved to the ${book1.shelf} shelf.`)