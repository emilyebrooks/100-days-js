/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */

//Find an element and add two different classes
document
  .querySelector("header div:last-child")
  .classList.add("new-class1", "new-class2");

//Remove one of the new classes
document.querySelector("header div:last-child").classList.remove("new-class1");

//Add a new attribute to an element
document.querySelector("img").setAttribute("title", "Everyday Backpack");

//Request the value of the attribute
document.querySelector("img").getAttribute("title");

//Change the value of the attribute
document.querySelector("img").setAttribute("alt", "Drawing of a backpack");

//Add some inline CSS to an element by specifying the style property and setting its value
document.querySelector(".site-title").style.color = "navy";

//Query the style property of an element in the console to get a list of all the style properties available
document.querySelector("li").style;
