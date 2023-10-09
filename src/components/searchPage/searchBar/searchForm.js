import React from "react";

// CSS File
import "./searchBar-styles.css";

export default function SearchForm() {
    return (
        <>
            {/* Search Params */}
            <div className="formPart">
                <label className="boldLabel" htmlFor="searchParams">Search for:</label>
                <input type="text" id="searchParams" name="searchParams" />
            </div>
            {/* Search Select */}
            <div className="formPart">
                <label className="boldLabel" html="searchSelect">Search by:</label>
                <select id="searchSelect" name="searchSelect">
                    <option value="title">Title</option>
                    <option value="author">Author</option>
                    <option value="isbn">ISBN</option>
                    <option value="subject">Subject</option>
                </select>
            </div>
            <div className="formPart">
                <div className="button" id="searchBtn">Search</div>
            </div>
        </>
    );
};