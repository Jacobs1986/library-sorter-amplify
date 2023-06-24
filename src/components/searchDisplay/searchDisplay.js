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

    useEffect(() => {
        if (search) {
            // Do API search
            axios.get(search).then((response) => {
                setResult(response.data);
            })
        }
    }, [search])
    return (
        <div>
            {/* Display the result */}
            {!result ?
                <div></div> :
                <div>
                    {result.items.map(book => (
                        <div key={book.id}>
                            {/* Book Title */}
                            <h2>{book.volumeInfo.title}</h2>
                            {/* Book Cover */}
                            <img 
                                src={book.volumeInfo.imageLinks.thumbnail}
                                alt="Book Cover"
                            />
                        </div>
                    ))}
                </div>
            }
        </div>
    );
};