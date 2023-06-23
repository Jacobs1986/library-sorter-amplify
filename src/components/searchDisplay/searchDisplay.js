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
            console.log(result.items)
        } else {
            console.log('There are no results')
        }
    }, [result])

    return (
        <div>
            {resultArray.length === 0 ?
                <div>
                    There is nothing to display
                </div> :
                <div>
                    {resultArray.map(book => (
                        <div key={book.id}>
                            {/* Book Title */}
                            <h2>{book.volumeInfo.title}</h2>
                            {/* Book Cover */}
                            <img
                                src={book.volumeInfo.imageLinks.smallThumbnail}
                                alt="Book cover"
                            />
                        </div>
                    ))}
                    {/* Book Title */}
                    {/* {resultArray[0].volumeInfo.title} */}
                    {/* Book Cover */}
                    {/* <img 
                        src={resultArray[0].volumeInfo.imageLinks.smallThumbnail}
                        alt="Book cover"
                    /> */}
                </div>
            }
        </div>
    );
};