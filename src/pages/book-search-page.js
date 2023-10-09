import React, {
    createContext,
    useReducer,
    useState
} from "react";

// Components
import SearchBar from "../components/searchPage/searchBar/searchBar";
import SearchResults from "../components/searchPage/searchResults/searchResults";

// Reducer
import { reducer as searchReducer} from '../functions/reducer'

// API setup function
import { apiSearch } from "../functions/apiSetup";

// Create a context
export const SearchContext = createContext();

export default function BookSearch() {
     // searchValue
     const [searchValue, setSearchValue] = useState("title");
     // searchReducer
     const [searchInfo, setSearchInfo] = useReducer(searchReducer, {});

    // function for searching with the google API
    const handleSearch = () => {
        console.log(apiSearch(searchValue, searchInfo));
    }

    return (
        <div>
            <SearchContext.Provider value={{ setSearchValue, searchInfo, setSearchInfo, handleSearch }}>
                <SearchBar />
            </SearchContext.Provider>
            <SearchResults />
        </div>
    );
};