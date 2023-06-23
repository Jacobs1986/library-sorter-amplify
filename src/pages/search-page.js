import React, { createContext, useState } from "react";

// Components
import SearchForm from "../components/searchForm/searchForm";
import SearchDisplay from "../components/searchDisplay/searchDisplay";

// Create a context
export const ResultContext = createContext();

export default function Search() {
    return (
        <div>
            <h1>Search for a book</h1>
            <SearchForm />
            <SearchDisplay />
        </div>
    );
};