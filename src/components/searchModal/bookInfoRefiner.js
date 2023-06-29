// Function for refining the book information
const bookInfoRefiner = (bookInfo) => {
    let image;
    // Set the title
    const title = bookInfo.volumeInfo.title;
    // Set the picture
    // First see if imageLinks exists
    if (!bookInfo.volumeInfo.imageLinks) {
        // If imageLinks is undefined
        image = "./Images/blank-cover.png"
    } else if (!bookInfo.volumeInfo.imageLinks.large) {
        // If there are no large images
        image = bookInfo.volumeInfo.imageLinks.thumbnail
    } else {
        image = bookInfo.volumeInfo.imageLinks.large
    }
    // Set the author(s)
    const author = bookInfo.volumeInfo.authors.join(", ")
    // Set the information to info
    const info = {title: title, author: author, image: image}
    return info
}

export default bookInfoRefiner;