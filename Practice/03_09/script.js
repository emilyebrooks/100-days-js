/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * (Remember, a method is a function inside an object that performs an action on a property of the object)
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  nameChange: function (newName) {
    //changes name of backpack
    this.name = newName;
  },
  colorChange: function (newColor) {
    //changes color of backpack
    this.color = newColor;
  },
  toggleLid: function (lidStatus) {
    //changes lidOpen value (true or false)
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    //changes length of each strap
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log("Name before:", backpack.name); //Prints the name of the backpack before

backpack.nameChange("Emily"); //calls or runs the nameChange method and passes a new value for the name property

console.log("Name after:", backpack.name); //Prints the name of the backpack after the nameChange method has run

console.log("Color before:", backpack.color); //Prints the color of the backpack before

backpack.colorChange("Red"); //calls or runs the colorChange method and passes a new value for the color property

console.log("Color after:", backpack.color); //Prints the color of the backpack after the colorChange method has run
