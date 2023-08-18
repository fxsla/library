
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


const book = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet" );


console.log(book.info())


readBooks(myLibrary);


let button = document.querySelector('.button').addEventListener('click', () => {
    
})