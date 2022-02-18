let myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function displayBook(book) {
    const newCard = document.createElement('div');
    newCard.classList.add('card');

    // Delete button for each book.
    const deleteBtnContainer = document.createElement('div');
    deleteBtnContainer.classList.add('delete-btn-container');
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'x';
    deleteBtnContainer.appendChild(deleteBtn);
    newCard.appendChild(deleteBtnContainer);

    // Title and Author.
    const bookMainContent = document.createElement('div');
    bookMainContent.classList.add('book-main');
    const newTitle = document.createElement('div');
    newTitle.classList.add('title');
    const newAuthor = document.createElement('div');
    newAuthor.classList.add('author');
    bookMainContent.appendChild(newTitle);
    bookMainContent.appendChild(newAuthor);
    newCard.appendChild(bookMainContent);

    // Pages and Read Progress.
    const bookFooter = document.createElement('div');
    bookFooter.classList.add('book-footer');
    const newPages = document.createElement('div');
    newPages.classList.add('pages');
    const newRead = document.createElement('div');
    newRead.classList.add('isRead');
    bookFooter.appendChild(newPages);
    bookFooter.appendChild(newRead);
    newCard.appendChild(bookFooter);

    // Assign the new entry with with the data attribute.
    newCard.dataset.key = `${myLibrary.length}`;

    newTitle.textContent = `${book.title}`;
    newAuthor.textContent = `${book.author}`;
    newPages.textContent = `Pages: ${book.pages}`;
    newRead.textContent = `Finished: ${book.isRead}`;

    bookContainer.appendChild(newCard);    

    myLibrary.push(book);   // Adds the book object into the array
} 

function createBook() {
    // Get the values from the form input
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const isReadYes = document.getElementById('isReadYes').checked;

    let book;
    if(isReadYes === true){
        book = new Book(title, author, pages, "Yes");
    }
    else {
        book = new Book(title, author, pages, "No");
    }
    
    displayBook(book);

    // Clear form input fields
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
}

function showForm(){
    bookForm.style.display = "flex";
}

function hideForm(event){
    if ((event.target !== bookForm && event.target !== addBookBtn) || event.target == cancelBtn) {
        bookForm.style.display = "none";

        // Clear form input fields
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('pages').value = '';
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

