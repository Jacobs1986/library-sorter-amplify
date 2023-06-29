import React, {
    useContext,
    useEffect,
    useState
} from "react";

// CSS File
import "./searchDisplay.css";

// Import ResultContext
import { SearchContext } from "../../pages/search-page";

// Import axios
import axios from "axios";

export default function SearchDisplay() {
    const { search } = useContext(SearchContext);
    // Make result hook for API
    const [result, setResult] = useState();
    // Creating a display hook 
    const [display, setDisplay] = useState();
    // Variable that allows for development
    const development = !false;

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

    return (
        <>
            {development ?
                <div className="displayContainer">
                    <div className="displayCard">
                        <div className="cardImage">
                            <img
                                src="./Images/blank-cover.png"
                                alt="Book cover"
                            />
                        </div>
                        <div className="bookTitle">
                            <h4>Book Title</h4>
                        </div>
                        <div className="middle">
                            <div className="text">View more info</div>
                        </div>
                    </div>
                    <div className="displayCard">
                        <div className="cardImage">
                            <img
                                src="./Images/blank-cover.png"
                                alt="Book cover"
                            />
                        </div>
                        <div className="bookTitle">
                            <h4>Book Title</h4>
                        </div>
                        <div className="middle">
                            <div className="text">View more info</div>
                        </div>
                    </div>
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
                                        <>
                                            {/* Check to see if imageLinks is undefined */}
                                            {book.volumeInfo.imageLinks === undefined ?
                                                // Display card with blank cover jpeg
                                                <div className="displayCard" key={i}>
                                                    <div className="cardImage">
                                                        <img
                                                            src="./Images/blank-cover.png"
                                                            alt="Book cover"
                                                        />
                                                    </div>
                                                    <div className="bookTitle">
                                                        <h4>{book.volumeInfo.title}</h4>
                                                    </div>
                                                    <div className="middle">
                                                        <div className="text">View more info</div>
                                                    </div>
                                                </div> :
                                                // Display book cover if not true
                                                <div className="displayCard" key={i}>
                                                    <div className="cardImage">
                                                        <img
                                                            src={book.volumeInfo.imageLinks.thumbnail}
                                                            alt="Book cover"
                                                        />
                                                    </div>
                                                    <div className="middle">
                                                        <div className="text">View more info</div>
                                                    </div>
                                                </div>

                                            }
                                        </>
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