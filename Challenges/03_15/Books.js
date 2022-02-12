/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class Books {
  constructor(
    // Defines parameters:
    title,
    numPages,
    category,
    hardCover,
    read,
    dateRead,
    shelf,
  ) {
    // Define properties:
    this.title = title; 
    this.numPages = numPages;
    this.category = category; 
    this.hardCover = hardCover;
    this.read = read; 
    this.dateRead = dateRead;
    this.shelf = shelf; 
  }
  // Add methods like normal functions:
  changeShelf(newShelf) {
    this.shelf = newShelf;
  }
}; 

export default Books;
