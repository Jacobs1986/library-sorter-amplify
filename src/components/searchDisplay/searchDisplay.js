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
    const development = true;

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
    
    if (development) {
        return (
            <div>Development mode is on</div>
        )
    } else {
        return (
            <div className="container" id="displayContainer">
                {!display ? null :
                    // Map the results
                    <div className="row">
                        {/* If there are no results */}
                        {display.totalItems === 0 ? <div>No results</div> :
                            <div>
                                {display.items.map((book, i) => (
                                    <div key={i} className="col-2">
                                        {/* Check if imageLinks is undefined */}
                                        {book.volumeInfo.imageLinks !== undefined
                                            // If imageLinks in not undefined
                                            ? <img
                                                src={book.volumeInfo.imageLinks.thumbnail}
                                                alt="Book Cover"
                                            />
                                            :
                                            // If imageLinks is undefined 
                                            <>
                                                {/* Book Title */}
                                                <h2>{book.volumeInfo.title}</h2>
                                                {/* Cover image */}
                                                <img
                                                    src={require("./blank-cover.jpeg")}
                                                    alt="Book cover"
                                                />
                                            </>
                                        }
                                    </div>
                                ))}
                            </div>}
                    </div>
                }
            </div>
        );
    }
};