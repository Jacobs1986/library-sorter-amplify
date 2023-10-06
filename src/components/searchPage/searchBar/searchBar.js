import React from "react";

// CSS File
import "./searchBar-styles.css";

export default function SearchBar() {
    return (
        <div>
            {/* Search form */}
            <div className="row">
                {/* Search input */}
                <div className="col-xs-6 col-s-6 col-lg-5">
                    <label className="boldLabel" html="searchParams">Search For:</label>
                    <input type="text" id="searchParams" name="searchParams" />
                </div>
                {/* Search select */}
                <div className="col-xs-6 col-s-4 col-lg-3 col-xl-2">
                    <label className="boldLabel" html="searchSelect">Search by:</label>
                    <select id="searchSelect" name="searchSelect">
                        <option value="title">Title</option>
                        <option value="author">Author</option>
                        <option value="isbn">ISBN</option>
                        <option value="subject">Subject</option>
                    </select>
                </div>
                {/* Form buttons */}
                <div className="col-xs-12 col-s-2">
                    <div className="button" id="searchBtn">Search</div>
                </div>
            </div>
        </div>
    );
};