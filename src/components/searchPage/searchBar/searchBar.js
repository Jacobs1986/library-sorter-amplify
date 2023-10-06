import React from "react";

// CSS File
import "./searchBar-styles.css";

export default function SearchBar() {
    return (
        <div>
            <div className="row">
                {/* Picture */}
                <div className="col-xs-12 col-s-6 imgCol">
                    <div className="bannerContainer">
                        <img
                            src={require("./books-magnifying-glass.jpg")}
                            width={"100%"}
                        />
                        {/* Attribution Link */}
                        <div className="bottom-right attributionLink">
                            Image by <a href="https://www.freepik.com/free-photo/books-magnifying-glass_22207266.htm#query=book%20search&position=3&from_view=search&track=ais" target="_blank">fabrikasimf</a> on Freepik
                        </div>
                    </div>
                </div>
                {/* Search form */}
                <div className="col-xs-12 col-s-6">
                    <div className="formCol">
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
                    </div>
                </div>
            </div>
        </div>
    );
};