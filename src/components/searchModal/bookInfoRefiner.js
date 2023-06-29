// Function for refining the book information
const bookInfoRefiner = (bookInfo) => {
    // Set the title
    const title = bookInfo.volumeInfo.title;
    // Set the information to info
    const info = {title: title}
    return info
}

export default bookInfoRefiner;