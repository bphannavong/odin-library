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

function addBookToLibrary(e) {

    //make form popup appear
    //take values from form --> create a book from values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').value;

    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
    displayBooks();
    toggleForm();
}

function toggleForm() {
    const form = document.getElementById('bookForm');
    form.classList.toggle('hidden');
}


function displayBooks() {
    const display = document.querySelector('.display');
    display.innerHTML = '';
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
                if (book[prop]) {
                    newContent.setAttribute('checked', "");
                }
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



const newBook = document.getElementById('newBtn'); //bring up popup form
newBook.addEventListener('click', toggleForm);

const addBook = document.getElementById('submitBtn');
addBook.addEventListener('click', addBookToLibrary, false);