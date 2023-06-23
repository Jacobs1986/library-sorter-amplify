import React from "react";

// Components
import SearchForm from "../components/searchForm/searchForm";
import SearchDisplay from "../components/searchDisplay/searchDisplay";

export default function Search() {
    return (
        <div>
            <h1>Search for a book</h1>
            <SearchForm />
            <SearchDisplay />
        </div>
    );
};