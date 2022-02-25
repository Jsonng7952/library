class Book {
    constructor(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    } 
}

class Library {

    myLibrary = [];

    showForm = () => {
        const bookForm = document.querySelector('#book-form');
        bookForm.style.display = "flex";
    }

    hideForm = (event) => {
        const cancelBtn = document.querySelector('.cancel-btn');
        if (event.target === cancelBtn) {
            const bookForm = document.querySelector('#book-form');
            bookForm.style.display = "none";
    
            // Clear form input fields
            document.getElementById('title').value = '';
            document.getElementById('author').value = '';
            document.getElementById('pages').value = '';
            document.getElementById('isreadyes').checked = true;
        }
    }

    displayBook = (book) => {
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
        newRead.textContent = "Finished?";
        const readSwitch = document.createElement('label');
        readSwitch.classList.add('switch');
        const checkBox = document.createElement('input');
        checkBox.type = "checkbox";    
        checkBox.id = "toggle-read";
        readSwitch.appendChild(checkBox);
        newRead.appendChild(readSwitch);
        bookFooter.appendChild(newPages);
        bookFooter.appendChild(newRead);
        newCard.appendChild(bookFooter);
    
        // Assign the new entry with with the data attribute.
        newCard.dataset.key = `${this.myLibrary.length}`;
        deleteBtn.dataset.key = `${this.myLibrary.length}`;
        checkBox.dataset.key = `${this.myLibrary.length}`;
    
        // Create a listener for the delete button.
        deleteBtn.addEventListener('click', (e) => this.removeBook(e.target.dataset.key));
    
        // Create a listener for the read toggle.
        checkBox.addEventListener('click', (e) => this.toggleRead(e.target.dataset.key))
    
        newTitle.textContent = `${book.title}`;
        newAuthor.textContent = `${book.author}`;
        newPages.textContent = `Pages: ${book.pages}`;
        checkBox.checked = book.isRead;
    
        const bookContainer = document.querySelector('.books');
        bookContainer.appendChild(newCard);    

        return this;
    } 

    createBook = () => {
        // Get the values from the form input
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const pages = document.getElementById('pages').value;
        const isReadYes = document.getElementById('isreadyes').checked;
    
        let book;
        if(isReadYes === true){
            book = new Book(title, author, pages, true);
        }
        else {
            book = new Book(title, author, pages, false);
        }
        
        this.displayBook(book);
        this.myLibrary.push(book);   // Adds the book object into the array
    
        // Close and clear form.
        const bookForm = document.querySelector('#book-form');
        bookForm.style.display = "none";
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('pages').value = '';
        document.getElementById('isreadyes').checked = true;
    }

    removeBook = (bookId) => {
        if(typeof this.myLibrary[bookId] !== 'undefined'){
            delete this.myLibrary[bookId];
    
            const getCard = document.querySelector(`.books .card[data-key="${bookId}"]`);
            const bookContainer = document.querySelector('.books');
            bookContainer.removeChild(getCard);
        }
    }

    toggleRead = (bookId) => {
        if(typeof this.myLibrary[bookId] !== 'undefined'){
            const getReadStatus = document.querySelector(`#toggle-read[data-key="${bookId}"]`).checked;
            this.myLibrary[bookId].isRead = getReadStatus;
        }
    }
    
}

const library = new Library();

const addBookBtn = document.querySelector('.add-book-btn');
addBookBtn.addEventListener('click', library.showForm);

const submitBtn = document.querySelector('.submit-btn');
submitBtn.addEventListener('click', library.createBook);

const cancelBtn = document.querySelector('.cancel-btn');
cancelBtn.addEventListener('click', library.hideForm);
