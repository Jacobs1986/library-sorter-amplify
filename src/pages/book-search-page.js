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

// Import axios
import axios from "axios";

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
        // Set the apiURL value
        let apiURL = apiSearch(searchValue, searchInfo);
        // Get the infomration from Google
        axios.get(apiURL).then(res => {
            console.log(res.data.items);
        })
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