var alert;

function searchForBook(searchInfo) {
    switch(searchInfo.type) {
        case "intitle": {
            alert = "The title will be searched for";
            return alert;
        }
        case "inauthor": {
            alert = "The author will be searched for";
            return alert;
        }
        default:
            return
    }
}

export default searchForBook