let library = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
};

Book.prototype.addBookToLibrary = function () {
    library.push(this)
}

function render() {
    mainGrid.innerHTML = library.map((book, index) => 
    `
        <div class="book">
            <div>${book.title}</div><br>
            <div>by ${book.author}</div><br>
            <div>Pages: ${book.pages}</div><br>
            <div>Read?: <button class="readBtn" id="read${index}">${book.read}</button></div>
            <div>
                <button class="delBtn" id="button${index}">Delete</button>
            </div>
        </div>
    `
    ).join('');
    for (let z = 0; z < library.length; z++) {
        document.getElementById(`button${z}`).addEventListener('click', () => {
            library.splice(z, 1);
            render();
        })
    };
    for (let q = 0; q < library.length; q++) {
        document.getElementById(`read${q}`).addEventListener('click', () => {
            if (library[q].read == "yes") {
                library[q].read = "no";
                render();
            } else if (library[q].read == "no") {
                library[q].read = "yes";
                render();
            };
        });
    }
    console.log(library)
};

let bookTitle = document.getElementById("bookTitle")
let bookAuthor = document.getElementById("bookAuthor")
let bookPages = document.getElementById("bookPages")
let bookRead = document.getElementById("bookRead")
let mainGrid = document.getElementById("main-grid")
const initialButton = document.getElementById("btn-add")

initialButton.addEventListener("click", () => {
    var newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.value);
    newBook.addBookToLibrary();
    bookTitle.value = "";
    bookAuthor.value = "";
    bookPages.value = "";
    render();
}
);

