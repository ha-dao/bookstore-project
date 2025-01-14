function bookTemplate(book) {
    return `
        <div class="bookcard">
            <h3>${book.name}</h3>
            <hr>
            <img src="">
            <hr>
            <p class="book-price">${book.price} €</p>
            <table>
                <tr>
                    <td>Author:</td>
                    <td>${book.author}</td>
                <tr>
                <tr>
                    <td>Erscheinungsjahr:</td>
                    <td>${book.publishedYear}</td>
                <tr>
                <tr>
                    <td>Genre:</td>
                    <td>${book.genre}</td>
                <tr>
            </table>
            <hr>
            <table id="comments">
            <h3>Kommentare</h3>
                <tr>
                    <td>Author:</td>
                    <td></td>
                <tr>
            </table>
        </div>
        `
}