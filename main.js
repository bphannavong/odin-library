let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleRead = function() {
    if (this.read === 'read') {
        this.read = 'not-read';
    } else {
        this.read = 'read';
    }
}

function addBookToLibrary() {
    //make form popup appear
    //take values from form --> create a book from values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').value;

    console.log(read);
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
    console.log(myLibrary);
    displayBooks();
    toggleForm();
}

function toggleForm() {
    const bookForm = document.getElementById('bookForm');
    bookForm.classList.toggle('hidden');
}


function displayBooks() {
    const display = document.querySelector('.display');
    display.innerHTML = '';
    let counter = 0;
    // loop through array and display book on screen
     for (const book of myLibrary) {
        //create div and add class card to it
        const newCard = document.createElement('div');
        newCard.classList.add('card');
        
        for (const prop in book) {
            const newDiv = document.createElement('div');
            if (prop === 'read') { //add toggle read button
                const newContent = document.createElement('button');
                if (book[prop] === 'read') {
                    newContent.classList.add('read');
                    newCard.classList.add('read');
                }
                newContent.addEventListener('click', toggleReadClass);
                newContent.setAttribute('data-index', counter);
                newDiv.append(newContent);
                newCard.append(newDiv); 
                break;
            } else {
                const newContent = document.createTextNode(book[prop]);
                newDiv.append(newContent);
                newCard.append(newDiv);
            }
        }
        //add Remove Book Button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.setAttribute('data-index', counter);
        removeBtn.addEventListener('click', removeBook);
        newCard.append(removeBtn);

        //display book as a card or table
        counter++;
        display.appendChild(newCard);
     }
}

function removeBook(e) {
    //find index from button, and remove that element from library
    const index = e.target.getAttribute('data-index');
    console.log(index);
    myLibrary.splice(index, 1);
    displayBooks();
 }

function toggleReadClass (e) {
    const index = e.target.getAttribute('data-index');
    myLibrary[index].toggleRead();
    displayBooks();
    console.log(myLibrary[index]);
}

const newBook = document.getElementById('newBtn'); //bring up popup form
newBook.addEventListener('click', toggleForm);

const addBook = document.getElementById('submitBtn');
addBook.addEventListener('click', addBookToLibrary);