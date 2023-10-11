import React, {
    useContext,
    useState
} from "react";

// CSS File
import "./searchBar-styles.css";

// Import context
import { SearchContext } from "../../../pages/book-search-page";

export default function SearchForm() {
    // Context values
    const { searchValue, setSearchValue, searchInfo, setSearchInfo, handleSearch, resultError } = useContext(SearchContext)
    // titleAuthor
    const [titleAuthor, setTitleAuthor] = useState(false);

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
        setSearchInfo({
            type: 'setToDefault',
            name: 'numOfResults',
            value: 10
        })
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
            {/* Number of results */}
            {searchValue === "isbn" ? <div></div> :
                <div className="formPart">
                    <label className="boldLabel" htmlFor="numOfResults">Number of Results:</label>
                    <input type="number" id="numOfResults" name="numOfResults" min="10" max="40" value={searchInfo.numOfResults || ""} onChange={handleSearchInput} />
                    {/* Result error */}
                    {!resultError ? <div></div> : <div className="boldLabel" id="resultError">The number must between 10 and 40</div>}
                </div>}
            <div className="formPart">
                <div className="button" id="searchBtn" onClick={handleSearch}>Search</div>
            </div>
        </>
    );
};