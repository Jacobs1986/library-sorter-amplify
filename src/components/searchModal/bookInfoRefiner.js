// Function for refining the book information
const bookInfoRefiner = (bookInfo) => {
    // Set the title
    const title = bookInfo.volumeInfo.title;
    // Set the author(s)
    const author = bookInfo.volumeInfo.authors[0]
    // Set the information to info
    const info = {title: title, author: author}
    return info
}

export default bookInfoRefiner;