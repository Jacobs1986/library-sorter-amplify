// Function that will check the information placed in a modal
const inputChecklist = (input, collectorInfo) => {
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

export default inputChecklist;