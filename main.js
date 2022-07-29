let myLibrary = [new Book('Moby Dick', 'Steve Jobs', 123, true)];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = Boolean(read);   
}

Book.prototype.info = function() {
    if (this.read) {
        return `${title} by ${author}, ${pages} pages, read.` 
    } else {
        return `${title} by ${author}, ${pages} pages, not read yet.` 
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
const display = document.querySelector('.display');
function displayBooks() {
    // loop through array and display book on screen
     for (const book of myLibrary) {
        //create div and add class card to it
        const newCard = document.createElement('div');
        newCard.classList.add('card');

        for (const prop in book) {
            const newDiv = document.createElement('div');
            if (prop === 'read') {
                const newText = document.createTextNode('Read? ');
                const newContent = document.createElement('INPUT');
                newContent.setAttribute('type', 'checkbox');
                newDiv.append(newText);
                newDiv.append(newContent);
                newCard.append(newDiv); 
                break;
            } else {
                const newContent = document.createTextNode(book[prop]);
                newDiv.append(newContent);
                newCard.append(newDiv);
            }
            
        }
        //display book as a card or table
        display.appendChild(newCard);
     }
}



const addBook = document.querySelector('button');
addBook.addEventListener('click', addBookToLibrary);