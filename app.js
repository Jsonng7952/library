let myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

// Still need to implement data attribute to correspond 
// to locate each book object.
function displayBook(book) {
    const newCard = document.createElement('div');
    const newTitle = document.createElement('div');
    const newAuthor = document.createElement('div');
    const newPages = document.createElement('div');
    newCard.classList.add('card');
    newTitle.classList.add('title');
    newAuthor.classList.add('author');
    newPages.classList.add('pages');
    //newCard.setAttribute('');
    newTitle.textContent = `${book.title}`;
    newAuthor.textContent = `${book.author}`;
    newPages.textContent = `${book.pages}`;
    newCard.appendChild(newTitle);
    newCard.appendChild(newAuthor);
    newCard.appendChild(newPages);
    bookContainer.appendChild(newCard);    

    myLibrary.push(book);   // Adds the book object into the array
} 

function createBook() {
    // NEW BOOK button brings up a form here. 
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    //const isRead = document.getElementById('title').value;

    let book = new Book(title, author, pages, true);

    displayBook(book);
}

function showForm(){
    bookForm.style.display = "flex";
}

function hideForm(event){
    if ((event.target !== bookForm && event.target !== addBookBtn) || event.target == cancelBtn) {
        bookForm.style.display = "none";
    }
}

const bookContainer = document.querySelector('.books');

const addBookBtn = document.querySelector('.add-book-btn');
addBookBtn.addEventListener('click', showForm);

const submitBtn = document.querySelector('.submit-btn');
submitBtn.addEventListener('click', createBook);

const cancelBtn = document.querySelector('.cancel-btn');
cancelBtn.addEventListener('click', hideForm);

const bookForm = document.querySelector('#book-form');

//window.addEventListener('click', hideForm);

