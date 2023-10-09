import React, {
    useEffect,
    useState
} from "react";

// CSS File
import "./searchBar-styles.css";

export default function SearchForm() {
    // titleAuthor
    const [titleAuthor, setTitleAuthor] = useState(false);
    // searchValue
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        console.log(`searchValue: ${searchValue}, titleAuthor: ${titleAuthor}`);
    }, [searchValue])

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
                <label className="boldLabel" htmlFor="searchParams">Search for:</label>
                <input type="text" id="searchParams" name="searchParams" />
            </div>
            <div className="formPart">
                <div className="button" id="searchBtn">Search</div>
            </div>
        </>
    );
};