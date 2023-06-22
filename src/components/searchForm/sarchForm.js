import React from "react";

// CSS File
import "./searchForm.css";

export default function SearchForm() {
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
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
};