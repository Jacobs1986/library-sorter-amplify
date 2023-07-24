// Function that will check the information placed in a modal
const inputChecklist = (input) => {
    // Check title
    // If there is no title return noTitle as true
    if (!input.title) {
        const noTitle = true
        return noTitle
    }
    // Convert author string into an array
    // First check to see if input.author is defined
    if (input.author) {
        // Split the string
        let authorArray = input.author.split(",");
        // set authorArray to author
        input = {
            ...input,
            author: authorArray
        }
    } else {
        // If author is blank set an empty array
        input = {
            ...input,
            author: []
        }
    }
    // Check the book cover image
    // If it is undefined set to blank-cover.png
    if (!input.cover) {
        input = {
            ...input,
            cover: './Images/blank-cover.png'
        }
    }
    return input
}

export default inputChecklist;