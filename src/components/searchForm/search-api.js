// Import axios
import axios from "axios";

var alert = "Search type not recognized";
// // Variables
var input;
var type;
var search;
var result;

const baseURL = "https://www.googleapis.com/books/v1/volumes?q=";

async function searchForBook(searchInfo) {
    switch(searchInfo.type) {
        // Title Search
        case "intitle": {
            alert = "The title will be searched for";
            return alert;
        }
        // Author search
        case "inauthor": {
            alert = "The author will be searched for";
            return alert;
        }
        // ISBN search
        case "isbn": {
            alert = "The ISBN will be searched for";
            // set type and input variables
            input = searchInfo.input;
            type = searchInfo.type;
            // // set search variable
            search = `${baseURL}${input}+${type}`;
            // // search for the info
            result = await axios.get(search);
            return result;
        }
        default:
            return alert;
    }
}

export default searchForBook