function init() {
    loadFromLocalStorage('books');
    renderAllBooks();
    setInitialLikes();
}

function renderAllBooks() {
    let allBooks = document.getElementById("all-books");
    allBooks.innerHTML = "";

    for (let i = 0; i < books.length; i++) {
        allBooks.innerHTML += bookTemplate(i);
    }
}

function renderComments(i) {
    let commentsRef = "";

    if (books[i].comments.length === 0) {
    commentsRef = `<p>Gib uns als erste/r deine/r Meinung. :)</p>`;
    }

    for (let j = books[i].comments.length - 1; j >= 0; j--) {
        commentsRef += getCommentTemplate(books[i].comments[j]);
    }
    return commentsRef;
}

function addComment(i) {
    let nameInputValue = document.getElementById(`name-${i}`).value;
    let messageInputvalue = document.getElementById(`comment-${i}`).value;

        if(nameInputValue && messageInputvalue) {
            books[i].comments.push({
                name: nameInputValue,
                comment: messageInputvalue,
            });

            document.getElementById(`name-${i}`).value = '';
            document.getElementById(`comment-${i}`).value = '';

            saveToLocalStorage('books', books);
            renderAllBooks();
            setInitialLikes();
        } else {
            alert("Bitte beide Felder ausfüllen.");
        }
}

function updatedLikes(i) {
    let likedIcon = document.getElementById(`liked-${i}`);
    let likesCount = document.getElementById(`likes-count-${i}`);

    if (books[i].liked) {
        books[i].likes--;
    } else {
        books[i].likes++;
    }
    books[i].liked = !books[i].liked;
    likedIcon.classList.toggle('liked');

    likesCount.textContent = books[i].likes;
    saveToLocalStorage('books', books);
}

function setInitialLikes() {
    for (let i = 0; i < books.length; i++) {
        let likedIcon = document.getElementById(`liked-${i}`);
        if (books[i].liked) {
            likedIcon.classList.add('liked');
        }
    }
}

function saveToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function loadFromLocalStorage(key) {
    const storedData = localStorage.getItem(key);
    if (storedData) {
        books = JSON.parse(storedData);
    }
}