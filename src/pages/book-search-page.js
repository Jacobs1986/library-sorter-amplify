import React from "react";

// Components
import Banner from "../components/searchPage/banner";
import SearchBar from "../components/searchPage/searchBar";
import SearchResults from "../components/searchPage/searchResults";

export default function BookSearch() {
    return (
        <div>
            <Banner />
            <SearchBar />
            <SearchResults />
        </div>
    );
};