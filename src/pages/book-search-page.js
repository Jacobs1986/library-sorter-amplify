import React from "react";

// Components
import SearchBar from "../components/searchPage/searchBar/searchBar";
import SearchResults from "../components/searchPage/searchResults/searchResults";

export default function BookSearch() {
    return (
        <div>
            <SearchBar />
            <SearchResults />
        </div>
    );
};