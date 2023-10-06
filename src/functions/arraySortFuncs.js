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