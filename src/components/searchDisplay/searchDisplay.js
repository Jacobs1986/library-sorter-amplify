import React, {
    useContext,
    useEffect,
    useState
} from "react";

// CSS File
import "./searchDisplay.css";

// Import Contexts
import { SearchContext } from "../../pages/search-page";
import { GoogleBookId } from "../../pages/search-page";

// Import axios
import axios from "axios";

export default function SearchDisplay() {
    // Import search hook
    const { search } = useContext(SearchContext);
    // Import setGoogleBookId
    const { setGoogleBookId } = useContext(GoogleBookId);
    // Make result hook for API
    const [result, setResult] = useState();
    // Creating a display hook 
    const [display, setDisplay] = useState();
    // Variable that allows for development
    const development = false;

    useEffect(() => {
        if (search) {
            // Do API search
            axios.get(search)
                .then((res) => {
                    setResult(res.data)
                })
        }
    }, [search])

    // Set display hook
    useEffect(() => {
        if (!result) {
            return
        } else {
            setDisplay(result);
            setResult('');
        }
    }, [result])

    // Function that will handle getting the book id
    const handleGetBookId = (e, book) => {
        // Set the googleBookId
        setGoogleBookId(book);
    }

    return (
        <>
            {development ?
                <div className="displayContainer">
                    <div>Development goes here</div>
                </div> :
                <div className="displayContainer">
                    {/* First check to see if display is undefined */}
                    {!display ? null :
                        <>
                            {/* Now check to see if totalItems is 0 */}
                            {display.totalItems === 0 ?
                                // If this is true display no results
                                <>
                                    <h1>No results</h1>
                                </> :
                                // Results will be displayed here
                                <>
                                    {/* Map the results */}
                                    {display.items.map((book, i) => (
                                        <div className="coverContainer" key={i}>
                                            <img
                                                // Check to see if the imagesLink is undefined
                                                src={book.volumeInfo.imageLinks === undefined ? "./Images/blank-cover.png" : book.volumeInfo.imageLinks.thumbnail}
                                                alt="Book cover"
                                                className="coverImage" style={{ width: "100%" }}
                                            />
                                            <div className="middle">
                                                <div className="coverButton" value={book.id} onClick={(e) => handleGetBookId(e, book.id)}>View More Info</div>
                                            </div>
                                            {/* Check to see if imagesLink is undefined, if it is show the book title */}
                                            {book.volumeInfo.imageLinks === undefined ?
                                                <div className="bookTitle">
                                                    <h4>{book.volumeInfo.title}</h4>
                                                </div> :
                                                <div></div>
                                            }
                                        </div>
                                    ))}
                                </>
                            }
                        </>
                    }
                </div>
            }
        </>
    )
};