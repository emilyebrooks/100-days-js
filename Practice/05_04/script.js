/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at traversing the DOM using JavaScript.
 */

/* 
- Identify specific element or elements to target
- Use console or script.js file to find those target elements
- Target specific elements nested inside other elements
- Try advanced CSS queries to get specific targets
- Experiment with querySelector() and querySelectorAll() to grab one or many
- Try populating a variable with an element higher up in the DOM tree hierarchy, 
    then use a querySelector on that variable to find one of it's children. 
*/

//Grab the header element
const header = document.querySelector(".siteheader");
console.log(header);

//Change the header  background color
header.style.backgroundColor = "yellow";

//Grab the site title element and change the color
header.querySelector(".site-title").style.color = "orange";

//Grab all the list elements in the backpack features list
const backpackFeaturesList = document.querySelectorAll(
  ".backpack__features li"
);
console.log(backpackFeaturesList);

//Grab the Open Lid buttons
const openButtons = document.querySelectorAll(".lid-toggle");
console.log(openButtons);

//Change the backgroundColor on the Open lid buttons
document.querySelector(".lid-toggle").style.backgroundColor = "lightblue"; 

//Change font color on first child element only in first list
document.querySelector("li:first-child").style.color="red"; 

//Change font color on last child element in all lists
document.querySelectorAll("li:last-child").forEach(item => item.style.color="purple");