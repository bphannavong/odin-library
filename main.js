let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = Boolean(read);
    this.info = function() {
        if (this.read) {
            return `${title} by ${author}, ${pages} pages, read.` 
        } else {
            return `${title} by ${author}, ${pages} pages, not read yet.` 
        }
        
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBooks() {
    // loop through array and display book on screen
}