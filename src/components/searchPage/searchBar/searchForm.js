import React, {
    useEffect,
    useReducer,
    useState
} from "react";

// CSS File
import "./searchBar-styles.css";

// Import the reducer
import { reducer as searchReducer} from "../../../functions/reducer";

export default function SearchForm() {
    // titleAuthor
    const [titleAuthor, setTitleAuthor] = useState(false);
    // searchValue
    const [searchValue, setSearchValue] = useState("");
    // searchReducer
    const [searchInfo, setSearchInfo] = useReducer(searchReducer, {});

    useEffect(() => {
        console.log(searchInfo);
    }, [searchInfo])

    // Function for handling select value
    const handleSearchOption = event => {
        // Get the value of the search select
        let currentValue = event.target.value;
        // Begin the switch statment
        switch (currentValue) {
            // If currentValue is title+author
            case "title+author":
                // Set the titleAuthor value to true
                setTitleAuthor(true);
                break
            // Default
            default:
                // Set the titleAuthor value to false
                setTitleAuthor(false);
        }
        // Set searchValue to currentValue
        setSearchValue(currentValue);
         // Reset searchInfo
         setSearchInfo({ type: 'reset' })
    }

    // Function for search input
    const handleSearchInput = event => {
        setSearchInfo({
            type: 'add',
            name: event.target.name,
            value: event.target.value
        })
    }

    return (
        <>
            {/* Search Select */}
            <div className="formPart">
                <label className="boldLabel" html="searchSelect">Search by:</label>
                <select id="searchSelect" name="searchSelect" onChange={handleSearchOption}>
                    <option value="title">Title</option>
                    <option value="author">Author</option>
                    <option value="title+author">Title & Author</option>
                    <option value="isbn">ISBN</option>
                </select>
            </div>
            {/* Search Params */}
            <div className="formPart">
                {!titleAuthor ?
                    // Form for just a single search
                    <div>
                        <label className="boldLabel" htmlFor="searchParams">Search for:</label>
                        <input type="text" id="searchParams" name="searchParams" value={searchInfo.searchParams || ""} onChange={handleSearchInput} />
                    </div> :
                    // Title and author search form
                    <div>
                        <label className="boldLabel" htmlFor="titleSearch">Title:</label>
                        <input type="text" id="titleSearch" name="titleSearch" value={searchInfo.titleSearch || ""} onChange={handleSearchInput} />
                        <label className="boldLabel" htmlFor="authorSearch" id="authorSearchLabel">Author:</label>
                        <input type="text" id="authorSearch" name="authorSearch" value={searchInfo.authorSearch || ""} onChange={handleSearchInput} />
                    </div>
                }

            </div>
            <div className="formPart">
                <div className="button" id="searchBtn">Search</div>
            </div>
        </>
    );
};