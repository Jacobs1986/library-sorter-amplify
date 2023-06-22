import React from "react";
// Import hooks
import { useState } from "react";

// CSS File
import "./searchForm.css";

export default function SearchForm() {
    // Hook for search input
    const [ searchInput, setSearchInput ] = useState('');
    return (
        <div>
            <form>
                {/* Type of search */}
                <label for="search">Search by:</label>
                <select id="search" name="search">
                    <option>Title</option>
                    <option>Author</option>
                    <option>Subject</option>
                    <option>ISBN</option>
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