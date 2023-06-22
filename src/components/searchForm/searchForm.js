import React from "react";
// Import hooks
import { useState } from "react";
// Import axios
// import axios from "axios";

// CSS File
import "./searchForm.css";

// Import search function
import searchForBook from "./search-api.js";

// Set the base URL from Google Books
// const baseURL = "https://www.googleapis.com/books/v1/volumes?q=";

export default function SearchForm() {
    // Hook for the search type
    const [ searchType, setSearchType ] = useState('Title');
    // Hook for search input
    const [ searchInput, setSearchInput ] = useState('');

    // Search function
    const handleSubmit = (event) => {
        // Prevent the default
        event.preventDefault();
        // Setup the searchInfo variable
        const searchInfo = { input: searchInput, type: searchType}
        // Pass info to function 
        const result = searchForBook(searchInfo);
        console.log(result);
        // set the search for axios
        // const search = `${baseURL}${searchInput}+${searchType}`;
        // Search the google database
        // axios.get(search).then((response) => {
        //     console.log(response.data);
        // })
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