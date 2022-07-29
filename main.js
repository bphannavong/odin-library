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

function addBookToLibrary() {
    const title = prompt('Title?', );
    const author = prompt('Author?', );
    const pages = prompt('Pages?', );
    const read = prompt('Read? True or false?', );

    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

function displayBooks() {
    // loop through array and display book on screen
     for (const book in myLibrary) {
        //create div and add class card to it
        const newCard = document.createElement('div');
        const titleDiv = document.createElement('div');
        const authorDiv = document.createElement('div');
        const pagesDiv = document.createElement('div');
        const readDiv = document.createElement('div');

        newCard.classList.add('newCard');

        titleDiv.classList.add('title');
        authorDiv.classList.add('author');
        pagesDiv.classList.add('pages');
        readDiv.classList.add('read');

        newCard.appendChild(titleDiv);
        newCard.appendChild(authorDiv);
        newCard.appendChild(pagesDiv);
        newCard.appendChild(readDiv);
        //display book as a card or table
        display.appendChild(newCard);
     }
}

const display = document.querySelector('.display');

const addBook = document.querySelector('button');
addBook.addEventListener('click', addBookToLibrary);