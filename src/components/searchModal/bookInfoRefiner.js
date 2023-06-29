// Function for refining the book information
const bookInfoRefiner = (bookInfo) => {
    let image;
    // Set the title
    const title = bookInfo.volumeInfo.title;
    // Set the picture
    // First see if imageLinks exists
    switch(bookInfo.volumeInfo.imageLinks) {
        case (!bookInfo.volumeInfo.imageLinks): {
            image = "There are no images"
            break
        }
        default:
            image = "Image will be displayed"
    }
    // Set the author(s)
    const author = bookInfo.volumeInfo.authors.join(", ")
    // Set the information to info
    const info = {title: title, author: author, image: image}
    return info
}

export default bookInfoRefiner;