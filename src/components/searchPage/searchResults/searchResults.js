import React, {
    useContext, useReducer
} from "react";

// CSS File
import "./searchResults-styles.css";
import "../../../styles/cards.css";

// Import the context
import { SearchInfo } from "../../../pages/book-search-page";

export default function SearchResults() {
    // Values
    const { searchArray, setGoogleId } = useContext(SearchInfo);

    // Function for getting the id of a book
    const handleGetBookId = event => {
        setGoogleId(event.target.id);
    }

    return (
        <div className="row searchRow">
            {!searchArray ? <div>Loading...</div> :
                // Begin mapping the array
                searchArray.map(book => (
                    <div className="col-xs-6 col-s-3 col-m-4 col-lg-2 col-xl-2" key={book.etag} onClick={handleGetBookId}>
                        <div className="card searchResult-cards">
                            {/* Book Cover */}
                            <img
                                className="card-image"
                                src={!book.volumeInfo.imageLinks ? "./Images/blank-cover.png" : book.volumeInfo.imageLinks.thumbnail}
                                id={book.id}
                                alt={`Cover image for ${book.volumeInfo.title}`}
                            />
                            {/* Card title */}
                            {!book.volumeInfo.imageLinks ? <div className="card-title">{book.volumeInfo.title}</div> : <div></div>}
                        </div>
                    </div>
                ))
            }
        </div>
    );
};