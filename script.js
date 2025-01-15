// initiazation on window load
function init() {
    renderAllBooks();
}

// show all books from object
function renderAllBooks() {
    let allBooks = document.getElementById('all-books');
    allBooks.innerHTML = "";

    for (let bookIndex = 0; bookIndex < books.length; bookIndex++) {
        allBooks.innerHTML += bookTemplate(books[bookIndex]);
    }
}

// show all comments for each book if comment exist
function renderComments(comments) {
    let commentsHTML = '';
    if (comments.length === 0) {
        commentsHTML = '<p>Keine Kommentare vorhanden.</p>';
    } else {
        for (let commentIndex = comments.length - 1; commentIndex >= 0; commentIndex--) {
            let comment = comments[commentIndex];
            commentsHTML += getCommentTemplate(comment);
        }
    }
    return commentsHTML;
}

// add new comment to existing comments box
function addComment(comments) {
    let nameInput = document.getElementById('name-${bookIndex}');
    let messageInput = document.getElementById('comment-${bookIndex}');
    let commentsHTML = '';

        if(nameInput.value > 0 && messageInput.value > 0) {
            comments.push(nameInput.value);
            comments.push(messageInput.value);
        } else {
            commentsHTML = '<p>Bitte keine Felder leer lassen.</p>';
        }
    renderComments(comments);
}

// // update likes quantity change icon color
function updatedLikes(bookIndex) {
    
}