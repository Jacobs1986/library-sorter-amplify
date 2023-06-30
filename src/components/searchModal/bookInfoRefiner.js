// Function for refining the book information
const bookInfoRefiner = (bookInfo) => {
    let cover;
    // Set the title
    const title = bookInfo.volumeInfo.title;
    // Set the picture
    // First see if imageLinks exists
    if (!bookInfo.volumeInfo.imageLinks) {
        // If imageLinks is undefined
        cover = "./Images/blank-cover.png"
    } else if (!bookInfo.volumeInfo.imageLinks.large){
        cover = bookInfo.volumeInfo.imageLinks.thumbnail
    } else {
        cover = bookInfo.volumeInfo.imageLinks.large
    }
    // Set the author(s)
    const author = bookInfo.volumeInfo.authors.join(", ")
    // Set the information to info
    const info = {title: title, author: author, cover: cover}
    return info
}

export default bookInfoRefiner;