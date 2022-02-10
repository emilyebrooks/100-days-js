/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class Bookshelf {
  constructor(
    // Defines parameters:
    color,
    numShelves,
    height,
    width,
    numBooks,
    numPics,
    boxItems,
    boxColor,
    boxSize,
    boxLidOn
  ) {
    // Define properties:
    this.color = color;
    this.numShelves = numShelves;
    this.height = height;
    this.width = width;
    this.numBooks = numBooks;
    this.numPics = numPics;
    this.box = {
      items: boxItems,
      boxColor: boxColor,
      size: boxSize,
      lidOn: boxLidOn,
    };
  }
  // Add methods like normal functions:
  colorChange(newShelfColor) {
    this.color = newShelfColor;
  }
  addShelves(newShelfNum) {
    this.numShelves = newShelfNum;
  }
  addBooks(newBookNum) {
    this.numBooks = newBookNum;
  }
  newBox(newBoxColor, newBoxSize) {
    this.box.boxColor = newBoxColor;
    this.box.boxSize = newBoxSize;
  }
  changeBoxItems(newBoxItems) {
    this.box.items = newBoxItems;
  }
  changeLidStatus(newLidStatus) {
    this.box.lidOn = newLidStatus;
  }
}

export default Bookshelf;
