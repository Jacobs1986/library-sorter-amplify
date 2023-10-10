// Google Books API url
let apiURL = "https://www.googleapis.com/books/v1/volumes?q=";
let searchURL = "";

// This function is for setting up for the search
export const apiSearch = (value, info) => {
    // Begin switch statment with value as the expression
    switch (value) {
        // If the value is author
        case "author": {
            // Make the string lower case and replace " " with "_"
            info = info.searchParams.toLowerCase().replace(/ /g, "+");
            // Create the url
            searchURL = `${apiURL}+inauthor:${info}`;
            break
        }
        // If the value is title+author
        case "title+author": {
            // Make the titleSearch lowerCase and replace " " with "+"
            let title = info.titleSearch.toLowerCase().replace(/ /g, "+");
            // Make the authorSearch lowerCase and replace " " with "+"
            let author = info.authorSearch.toLowerCase().replace(/ /g, "+");
            // Create the url
            searchURL = `${apiURL}${title}+inauthor:${author}`;
            break
        }
        // if the value is isbn
        case "isbn": {
            // Get the isbn
            info = info.searchParams;
            // Create the url
            searchURL = `${apiURL}+isbn:${info}`;
            break
        }
        default: {
            // Make the string lower case and replace " " with "_"
            info = info.searchParams.toLowerCase().replace(/ /g, "+");
            // Create the url
            searchURL = `${apiURL}+intitle:${info}`
        }
    }
    // Return the searchURL
    return searchURL
}