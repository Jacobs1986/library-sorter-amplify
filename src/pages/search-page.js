import React, { createContext, useState } from "react";

// Components
import SearchForm from "../components/searchForm/searchForm";
import SearchDisplay from "../components/searchDisplay/searchDisplay";

// Create a context
export const SearchContext = createContext();

export default function Search() {
    const [ search, setSearch ] = useState('');
    return (
        <SearchContext.Provider value={{ search, setSearch }}>
            <h1>Search for a book</h1>
            <SearchForm />
            <SearchDisplay />
        </SearchContext.Provider>
    );
};