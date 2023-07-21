// Function for refining the book information
const bookInfoRefiner = (bookInfo) => {
    let cover;
    let author;
    // Set the title
    const title = bookInfo.volumeInfo.title;
    // Set the picture
    // First see if imageLinks exists
    if (!bookInfo.volumeInfo.imageLinks) {
        // If imageLinks is undefined
        cover = "./Images/blank-cover.png"
    } else if (!bookInfo.volumeInfo.imageLinks.medium){
        cover = bookInfo.volumeInfo.imageLinks.thumbnail;
    } else {
        cover = bookInfo.volumeInfo.imageLinks.medium;
    }
    // Set the author(s)
    // Check to see if there is an author array
    if (Array.isArray(bookInfo.volumeInfo.authors)) {
        author = bookInfo.volumeInfo.authors.join(", ");
    } else {
        author = "NA";
    }
    // Set the ISBN
    const isbn = isbnSearch(bookInfo.volumeInfo);
    // Set the publisher
    const publisher = bookInfo.volumeInfo.publisher;
    // Set the publishDate
    const publishDate = bookInfo.volumeInfo.publishedDate;
    // Set pageCount
    const pageCount = bookInfo.volumeInfo.pageCount;
    // Set description
    const description = bookInfo.volumeInfo.description;
    // Set the information to info
    const info = {title, author, cover, isbn, publisher, publishDate, pageCount, description}
    return info
}

// fucntion for searching for a specific ISBN
const isbnSearch = (input) => {
    var result;
    // First make sure that there is an industryIdentifiers
    if (!input.industryIdentifiers) {
        result = "There is no ISBN"
    } else {
        // Search for ISBN_13
        result = input.industryIdentifiers.find(loc => loc.type === "ISBN_13");
        // If the result comes back undefined
        if (!result) {
            result = input.industryIdentifiers.find(loc => loc.type === "ISBN_10")
        }
    }
    return result
}

export default bookInfoRefiner;