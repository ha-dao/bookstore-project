function bookTemplate(i) {
    return `
        <div class="bookcard">
            <h3>${books[i].name}</h3>
            <hr>
            <img class="book-cover" src="./assets/img/book.png">
            <hr>
            <div class="price-likes">
                <p class="book-price">${books[i].price.toFixed(2)} €</p>
                <p class="like-box" id="like-box">
                    <svg class="basic-heart" id="liked-${i}" onclick="updatedLikes(${i})" viewBox="-0.8 -0.8 17.60 17.60"><path d="M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z"></path></svg>
                    <span id="likes-count-${i}">${books[i].likes}</span>
                </p>
            </div>
            <table>
                <tr>
                    <td>Author:</td>
                    <td>${books[i].author}</td>
                <tr>
                <tr>
                    <td>Erscheinungsjahr:</td>
                    <td>${books[i].publishedYear}</td>
                <tr>
                <tr>
                    <td>Genre:</td>
                    <td>${books[i].genre}</td>
                <tr>
            </table>
            <hr>
            <h3>Kommentare</h3>
            <input type="text" id="name-${i}" placeholder="Name" minlength="1" maxlength="12" required>
            <textarea id="comment-${i}" placeholder="Kommentar" minlength="1" maxlength="500" required></textarea>
            <button onclick="addComment(${i})">Kommentar hinzufügen</button>
            <div class="comment-form">
                <table class="comments" id="comments">
                    ${renderComments(i)}
                </table>
            </div>
        </div>
        `;
}

function getCommentTemplate(comment) {
    return `
        <tr>
            <td>${comment.name}:</td>
            <td>${comment.comment}</td>
        <tr>
    `;
}