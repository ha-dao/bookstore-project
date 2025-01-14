function init() {
    renderAllBooks();
}

function renderAllBooks() {
    let allBooks = document.getElementById('all-books');
    allBooks.innerHTML = "";

    for (let bookIndex = 0; bookIndex < books.length; bookIndex++) {
        allBooks.innerHTML += bookTemplate(books[bookIndex]);
    }
}