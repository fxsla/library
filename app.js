
const myLibrary = [];

function addBookToLibrary() {
    const title = prompt("Please enter a title of the book: ");
    const author = prompt(`Please enter the author of ${title}`);
    const pages = prompt(`Please enter the number of pages of ${title}`);
    const read = prompt(`Have you read the book?`);

    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    }
}

function readBooks(library) {
    for(book in library){
        console.log(book);
    }
}


function createBookCard(userTitle, userAuthor, userPages, userRead){

    const bookContainer = document.querySelector('.book-container');

    const book = document.createElement('div');
    book.classList.add("book");
    const title = document.createElement('h2');
    title.classList.add('book-title')
    title.appendChild(document.createTextNode(`${userTitle}`));
    const author = document.createElement('p');
    author.classList.add('book-author');
    author.appendChild(document.createTextNode(`Author: ${userAuthor}`));
    const pages = document.createElement('p');
    pages.classList.add('book-pages');
    pages.appendChild(document.createTextNode(` No. Pages: ${userPages}`));
    const read = document.createElement('p');
    read.classList.add('book-read');
    read.appendChild(document.createTextNode(`Read: ${userRead}`))
    const removeButton = document.createElement('button');
    removeButton.type = "button";
    removeButton.appendChild(document.createTextNode(`Remove Book`))
    removeButton.classList.add('book-remove');


    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(pages);
    book.appendChild(read);
    book.appendChild(removeButton);

    bookContainer.appendChild(book);

}


const book = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet" );
const book2 = new Book("The Hobbito", "J.R.R. Tolkiens", 305, "read" );
const book3 = new Book("B", "Me", 923, "not read" );
const book4 = new Book("The Alpha", "Andrew Tate", 5, "read");
const book5 = new Book("The Beta", "Adin Ross", 2000, "not read yet")

myLibrary.push(book, book2, book3, book4, book5);


function arrayToCards(array){
    for(let i=0; i<array.length; i++){
        let currentBook = array[i];
        createBookCard(currentBook.title, currentBook.author, currentBook.pages, currentBook.read);
    }
}

arrayToCards(myLibrary);

let button = document.querySelector('.button').addEventListener('click', () => {
    
})