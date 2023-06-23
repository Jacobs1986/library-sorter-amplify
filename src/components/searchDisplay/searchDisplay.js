import React, {
    useContext,
    useEffect,
    useState
} from "react";

// CSS File
import "./searchDisplay.css";

// Import ResultContext
import { ResultContext } from "../../pages/search-page";

export default function SearchDisplay() {
    // Bring in result from ResultContext
    const { result } = useContext(ResultContext);
    const [resultArray, setResultArray] = useState([]);

    useEffect(() => {
        // Ser the result to resultArray
        if (result) {
            setResultArray(result.items);
        }
    }, [result])

    return (
        <div>
            This is where the results will go
        </div>
        // <div>
        //     {!resultArray || resultArray.length === 0 ?
        //         <div>
        //             There are no results
        //         </div> :
        //         <div>
        //             {resultArray.map(book => (
        //                 <div key={book.id}>
        //                     {/* Book Title */}
        //                     <h2>{book.volumeInfo.title}</h2>
        //                     {/* Bookcover */}
        //                     {!book.volumeInfo.imageLinks.thumbnail ?
        //                         <div>No cover</div> :
        //                         <img
        //                             src={book.volumeInfo.imageLinks.thumbnail}
        //                             alt="Book Cover"
        //                         />}
        //                 </div>
        //             ))}
        //         </div>
                // <div>
                //     {/* Title of book
                //     <h2>{resultArray[0].volumeInfo.title}: {resultArray[0].volumeInfo.subtitle}</h2>
                //     {/* Bookcover */}
                //     <img
                //         src={resultArray[0].volumeInfo.imageLinks.thumbnail}
                //         alt="Book cover"
                //     />
                //     {/* Author */}
                //     <p>Author: {resultArray[0].volumeInfo.authors[0]}</p>
                //     {/* Publisher */}
                //     <p>Publisher: {resultArray[0].volumeInfo.publisher}</p>
                //     {/* Published Date */}
                //     <p>Published Date: {resultArray[0].volumeInfo.publishedDate}</p>
                //     {/* ISBN */}
                //     <p>ISBN: {resultArray[0].volumeInfo.industryIdentifiers[0].identifier}</p>
                //     {/* Description */}
                //     <h4>Description</h4>
                //     <p>{resultArray[0].volumeInfo.description}</p> */}
                // </div>
        //     }
        // </div>
    );
};