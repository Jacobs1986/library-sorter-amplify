import React from "react";

// Components
import Banner from "../components/searchPage/banner/banner";
import SearchBar from "../components/searchPage/searchBar/searchBar";
import SearchResults from "../components/searchPage/searchResults/searchResults";

export default function BookSearch() {
    return (
        <div>
            <Banner />
            <SearchBar />
            <SearchResults />
        </div>
    );
};