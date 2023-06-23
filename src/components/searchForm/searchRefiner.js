// URL base for the google search
const baseURL = 'https://www.googleapis.com/books/v1/volumes?q='

// Make function for a google search
function googleSearch(searchInfo) {
    // Create variables
    let type;
    let input;
    let param;
    switch(searchInfo.terms) {
        // ISBN Search
        case "isbn": {
            // Put the input and type from searchInfo into their own variables
            input = searchInfo.input;
            type = searchInfo.terms
            // set the search param
            param = `${baseURL}${input}+${type}`
            // return param
            return param;
        }
        // Title, author, subject
        default: {
            // Set type variable
            type = searchInfo.terms;
            // set input by replacing spaces with +
            input = searchInfo.input.replace(/ /g, '+');
            // set to the new param
            param = `${baseURL}${input}+${type}&maxResults=10`;
            return param;
        }
    }
}

export default googleSearch;