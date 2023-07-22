import React, { createContext, useState } from "react";

// Components
import SearchForm from "../components/searchForm/searchForm";
import SearchDisplay from "../components/searchDisplay/searchDisplay";
import DisplayModal from "../components/searchModal/searchModal";
import InputModal from "../components/inputModal/inputModal";

// Create a context
export const SearchContext = createContext();
export const GoogleBookId = createContext();

export default function Search() {
    const [search, setSearch] = useState('');
    const [googleBookId, setGoogleBookId] = useState('');

    return (
        <SearchContext.Provider value={{ search, setSearch }}>
            <h1>Search for a book</h1>
            <SearchForm />
            <GoogleBookId.Provider value={{ googleBookId, setGoogleBookId }}>
                <SearchDisplay />
                <DisplayModal />
            </GoogleBookId.Provider>
            <InputModal />
        </SearchContext.Provider>
    );
};