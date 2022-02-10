/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Bookshelf from "./bookshelf.js"; //put this at the top so the class is declared before we run it

const officeShelves = new Bookshelf(
  "White",
  7,
  10,
  3,
  26,
  5,
  "pens",
  "grey",
  "small",
  true
);

// console.log("The Office Shelves object:", officeShelves);//
console.log("What color are the Office Shelves?", officeShelves.color);
console.log(
  "What color is the box on the Office Shelves?",
  officeShelves.box.boxColor
);

const livingRoomShelves = new Bookshelf(
  "Blue",
  4,
  4,
  8,
  0,
  2,
  "candles",
  "white",
  "medium",
  true
);
// console.log("The Living Room Shelves object:", livingRoomShelves);
console.log(
  "How many books are on the Living Room Shelves?",
  livingRoomShelves.numBooks
);
console.log(
  "How many feet wide are the Living Room Shelves?",
  livingRoomShelves.width
);

officeShelves.colorChange("red");
console.log(
  `We got new shelves in the office! They are now ${officeShelves.color}!`
);

livingRoomShelves.addBooks(2);
console.log(
  `I added ${livingRoomShelves.numBooks} books to the living room shelves.`
);
