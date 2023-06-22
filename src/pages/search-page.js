import React from "react";

export default function Search() {
    return (
        <div>
            <h1>Search for a book</h1>
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