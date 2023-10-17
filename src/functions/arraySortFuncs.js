// Sort an array by name ASC
export const nameASC = (a, b) => {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1
    }
    return 0
}

// Sort an array by title ASC
export const titleASC = (a, b) => {
    if (a.title < b.title) {
        return -1;
    }
    if (a.title > b.title) {
        return 1
    }
    return 0
}