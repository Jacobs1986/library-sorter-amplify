import React from "react";
// Import hooks
import { useState, useEffect } from "react";

// CSS File
import "./searchForm.css";

// Import search function
import googleSearch from "./searchRefiner";

export default function SearchForm() {
    // Hook for the search type
    const [ searchTerm, setSearchTerm ] = useState('intitle');
    // Hook for search input
    const [ searchInput, setSearchInput ] = useState('');
    // Hook for results
    const [ result, setResult ] = useState('');

    useEffect(() => {
        if (result) {
            console.log(result);
        }
    }, [result])

    // Search function
    const handleSubmit = (event) => {
        // Prevent the default
        event.preventDefault();
        // Setup the searchInfo variable
        const searchInfo = { input: searchInput, terms: searchTerm}
        // Pass info to function and set variable
        const searchParam = googleSearch(searchInfo);
        console.log(searchParam);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* Type of search */}
                <label for="search">Search by:</label>
                <select 
                    id="search" 
                    name="search" 
                    onChange={event => setSearchTerm(event.target.value)}
                    value={searchTerm}>
                    <option value="intitle">Title</option>
                    <option value="inauthor">Author</option>
                    <option value="subject">Subject</option>
                    <option value="isbn">ISBN</option>
                    <option value="inpublisher">Publisher</option>
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