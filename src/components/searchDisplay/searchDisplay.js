import React, {
    useContext,
    useEffect,
    useState
} from "react";

// CSS File
import "./searchDisplay.css";

// Import ResultContext
import { SearchContext } from "../../pages/search-page";

export default function SearchDisplay() {
    const { search } = useContext(SearchContext);
    return (
        <div>
            Search results go here.
        </div>
    );
};