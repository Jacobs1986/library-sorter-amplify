// Make function for a google search
function googleSearch(searchInfo) {
    let alert;
    switch(searchInfo.type) {
        // ISBN Search
        case "isbn": {
            alert = "The ISBN will be used to search for a book";
            return alert;
        }
        default: {
            alert = "The title, author, subject or publisher will be used in the search";
            return alert;
        }
    }
}

export default googleSearch;