import React, { useState, useContext } from "react";

// CSS File
import "./searchForm.css";

// Import context
import { SearchContext } from "../../pages/search-page";

// Import search function
import googleSearch from "./searchRefiner";

export default function SearchForm() {
    // Hook for the search type
    const [searchTerm, setSearchTerm] = useState('intitle');
    // Hook for search input
    const [searchInput, setSearchInput] = useState('');
    // Import context
    const { setSearch } = useContext(SearchContext);

    // Search function
    const handleSubmit = (event) => {
        // Prevent the default
        event.preventDefault();
        // Setup the searchInfo variable
        const searchInfo = { input: searchInput, terms: searchTerm }
        // Pass info to function and set variable
        setSearch(googleSearch(searchInfo));
        setSearchInput('');
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                {/* Type of search */}
                <div className="row">
                    <div className="col-3">
                        <label htmlFor="search">Search by:</label>
                        <select
                            id="search"
                            name="search"
                            onChange={event => setSearchTerm(event.target.value)}
                            value={searchTerm}>
                            <option value="intitle">Title</option>
                            <option value="inauthor">Author</option>
                            <option value="isbn">ISBN</option>
                        </select>
                    </div>
                    {/* Input search information */}
                    <div className="col-6">
                        <label htmlFor="keywords">Search For:</label>
                        <input
                            id="keywords"
                            type="text"
                            placeholder="Enter search here"
                            onChange={event => setSearchInput(event.target.value)}
                            value={searchInput}
                        />
                    </div>
                </div>
                <div className="row">
                    <div class="col-12">
                        <input type="submit" value="Search" />
                    </div>
                </div>
            </form>
        </div>
    );
};