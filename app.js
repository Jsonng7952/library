let myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBook(book) {
    myLibrary.push(book);
}

console.log(Book);
let book1 = new Book("book1", "author1", "1", true);
let book2 = new Book("book2", "author2", "2", false);
let book3 = new Book("book3", "author3", "3", true);

addBook(book1);
addBook(book2);
addBook(book3);

function displayBook() {
    for(let i = 0; i < myLibrary.length; i++){
        
    }
}   