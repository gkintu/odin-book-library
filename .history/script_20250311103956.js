// storing all the added books
const myLibrary = [];

// Object Constructor for the books

function Book(title, author, pages, read) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// update myLibrary array and display the library cards
function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
  displayBook();
}

//function to display the books for the user

function displayBook() {
  const libraryDiv = document.getElementById("library");
  libraryDiv.innerHTML = ""; //Clear container for each update

  myLibrary.forEach((book) => {
    const card = document.createElement("div");
    card.classList.add("book-card");
    card.dataset.id = book.id;

    card.innerHTML = `
    <h3>${book.title}</h3>
    <p><strong>Author:</strong> ${book.author}</p>
    <p><strong>Pages:</strong> ${book.pages}</p>
    <button class="btn remove-btn" data-id="${book.id}">Remove</button>
    <button class="btn toggle-btn" data-id="${book.id}"> ${
      book.read ? "Read" : "Not Read"
    }</button>
   `;

    libraryDiv.appendChild(card);
  });
}

//Function to remove book from myLibrary Array based on its book.id
function removeBook(id) {
  const index = myLibrary.findIndex((book) => book.id === id);
  if (index !== -1) {
    myLibrary.splice(index, 1);
  }
}

//Function to toggle Read button from Read to Not Read
function toggleReadStatus(id) {
  const book = myLibrary.find((book) => book.id === id);
  if (book) {
    book.read = !book.read;
    displayBook();
  }
}

// --- Event Listeners ---

// Activate form modal when new book button is clicked
document.getElementById("new-book-btn").addEventListener("click", () => {
  document.getElementById("modal-book-container").style.display = "flex";
});

// Get form submission from user
document.getElementById("book-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;

  addBookToLibrary(title, author, pages, read);

  //After book card is added, hide and reset the modal
  event.target.reset();
  document.getElementById("modal-book-container").style.display = "none";
});

// Cancel button to hide the modal
document.getElementById("cancel-btn").addEventListener("click", () => {
  document.getElementById("modal-book-container").style.display = "none";
});

//update book card based on remove or toggle button
document.getElementById("library").addEventListener("click", (event) => {
  const id = event.target.dataset.id;

  if (event.target.classList.contains("toggle-btn")) {
    toggleReadStatus(id) 
  } else if (event.target.classList.contains("remove-btn")) {
    removeBook(id);
    displayBook();
  }
});
