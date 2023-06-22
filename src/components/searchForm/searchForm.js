import React from "react";
// Import hooks
import { useState } from "react";

// CSS File
import "./searchForm.css";

export default function SearchForm() {
    // Hook for the search type
    const [ searchType, setSearchType ] = useState('');
    // Hook for search input
    const [ searchInput, setSearchInput ] = useState('');

    // Search function
    const handleSubmit = (event) => {
        // Prevent the default
        event.preventDefault();
        console.log(searchInput);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* Type of search */}
                <label for="search">Search by:</label>
                <select 
                    id="search" 
                    name="search" 
                    onChange={event => setSearchType(event.target.value)}
                    value={searchType}>
                    <option value="Title">Title</option>
                    <option value="Author">Author</option>
                    <option value="Subject">Subject</option>
                    <option value="ISBN">ISBN</option>
                </select>
                {/* Input search information */}
                <input 
                    type="text"
                    placeholder="Enter search here"
                    onChange={event => setSearchInput(event.target.value)}
                    value={searchInput}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
};