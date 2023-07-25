// Function that will check the information placed in a modal
export const inputChecklist = (input, collectorInfo) => {
    // Check title
    // If there is no title return noTitle as true
    if (!input.title) {
        const noTitle = true
        return noTitle
    }
    // Check the book cover image
    // If it is undefined set to blank-cover.png
    if (!input.cover) {
        input = {
            ...input,
            cover: './Images/blank-cover.png'
        }
    }
    // set collector info
    input = {
        ...input,
        collectorInfo: collectorInfo
    }
    // Check bookCondition
    // If collectorInfo is true and bookCondition is undefined set to Excellent
    if (collectorInfo === true && !input.bookCondition) {
        input = {
            ...input,
            bookCondition: "Excellent"
        }
    }
    return input
}

// Function for search modal
export const searchModalInfo = (volumeInfo) => {
    // Save the informatin from vaolumeInfo to saveInfo for the database
    let saveInfo = {
        title: volumeInfo.title,
        author: volumeInfo.author,
        publisher: volumeInfo.publisher,
        pubDate: volumeInfo.publishDate,
        isbn: volumeInfo.isbn,
        numOfPages: volumeInfo.pageCount,
        synopsis: volumeInfo.description,
        cover: volumeInfo.cover,
        collectorInfo: false
    }
    return saveInfo
}