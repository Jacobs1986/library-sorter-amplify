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
            param = `${baseURL}${type}:${input}`
            // return param
            return param;
        }
        // Title search
        case "intitle": {
            // set input by replacing spaces with +
            input = searchInfo.input.replace(/ /g, '+');
            // set the new param
            // eslint-disable-next-line no-useless-escape
            param = `${baseURL}intitle:\"${input}\"&maxResults=40`;
            return param
        }
        // author
        case "inauthor": {
            // Set type variable
            type = searchInfo.terms;
            // set input by replacing spaces with +
            input = searchInfo.input.replace(/ /g, '+');
            // set to the new param
            // eslint-disable-next-line no-useless-escape
            param = `${baseURL}inauthor:\"${input}\"&maxResults=40`;
            return param;
        }
        // Title, author, subject
        default:
            return
    }
}

export default googleSearch;