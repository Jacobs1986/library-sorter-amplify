import React, {
    createContext,
    useEffect,
    useReducer,
    useState
} from "react";

// Components
import SearchBar from "../components/searchPage/searchBar/searchBar";
import SearchResults from "../components/searchPage/searchResults/searchResults";


import { reducer as searchReducer} from '../functions/reducer'

// Create a context
export const SearchContext = createContext();

export default function BookSearch() {
     // searchValue
     const [searchValue, setSearchValue] = useState("title");
     // searchReducer
     const [searchInfo, setSearchInfo] = useReducer(searchReducer, {});
     const [runSearch, setRunSearch] = useState(false)

     useEffect(() => {
        console.log(searchInfo);
     }, [runSearch])

    // function for searching with the google API
    const handleSearch = () => {
        setRunSearch(!runSearch);
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