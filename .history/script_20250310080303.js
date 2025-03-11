
// storing all the added boks
const myLibrary = [];

// Object Constructor for the books

function Book(title, author, pages, read) {
  this.id = crypto.randomUUID;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read,
}


// update myLibrary array and display the library cards 
function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
  displayBooks();
}

//function to display the books for the user

function displayBook() {
  const libraryDiv = document.getElementById("library");
  libraryDiv.innerHTML = ""; //Clear container for each update

  myLibrary.forEach(book => {
    const card = document.createElement('div');
    card.classList.add('book-card')
    card.dataset.id = book.id;
  })

  card = `
   <h3>${book.title}<h3>
   <p><strong>Author:</strong> ${book.author}</p>
   <p><strong>Pages:</strong> ${book.pages}</p>
   <p><strong>Read:</strong> ${book.read ? 'Read' : 'Not Read'}</p>
   <button class="btn remove-btn" data-id="${book.id}">${}</button>
   <button></button>
   
  `
}
