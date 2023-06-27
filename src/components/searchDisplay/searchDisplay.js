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
        setDisplay(result);
    }, [result])

    return (
        <div>
            {!display || display.length === 0 ? null :
                // Map the results
                <div>
                    {display.items.map((book) => {
                        return (
                            <div key={book.id}>
                                {/* Book Title */}
                                <h2>{book.volumeInfo.title}</h2>
                                {/* Book Cover */}
                                <img 
                                    src = {
                                        book.volumeInfo.imageLinks === undefined 
                                        ? require("./blank-cover.jpeg")
                                        : `${book.volumeInfo.imageLinks.thumbnail}`
                                    }
                                    alt = "Book Cover"
                                />
                            </div>
                        )
                    })}
                </div>
                // <div>
                //     {/* Book Title */}
                //     <h2>{display.items[0].volumeInfo.title}</h2>
                //     {/* Book Cover */}
                //     <p>{display.items[0].volumeInfo.imageLinks.thumbnail}</p>
                // </div>
            }
        </div>
    );
};