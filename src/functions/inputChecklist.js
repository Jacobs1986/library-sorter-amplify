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
export const searchModalInfo = (volumeInfo, inputCollectorInfo) => {
    // Save the informatin from vaolumeInfo to saveInfo for the database
    let saveInfo = {
        title: volumeInfo.title,
        author: volumeInfo.author,
        publisher: volumeInfo.publisher,
        pubDate: volumeInfo.publishDate,
        isbn: volumeInfo.isbn.identifier,
        numOfPages: volumeInfo.pageCount,
        synopsis: volumeInfo.description,
        cover: volumeInfo.cover,
    }
    // Check to see the sate of collectorInfo
    // If collectorInfo is false, then don't add any collector information
    if (inputCollectorInfo.collectorInfo === false) {
        saveInfo = {
            ...saveInfo,
            collectorInfo: false
        }
    } else {
        saveInfo = {
            ...saveInfo,
            collectorInfo: true
        }
    }
    return saveInfo
}