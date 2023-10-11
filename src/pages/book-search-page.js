import React, {
    createContext,
    useReducer,
    useState
} from "react";

// Components
import SearchBar from "../components/searchPage/searchBar/searchBar";
import SearchResults from "../components/searchPage/searchResults/searchResults";
import SearchModal from "../components/searchPage/searchModal/searchModal";

// Reducer
import { reducer as searchReducer } from '../functions/reducer'

// Import axios
import axios from "axios";

// API setup function
import { apiSearch } from "../functions/apiSetup";

// Create a contexts
export const SearchContext = createContext();
export const SearchInfo = createContext();

export default function BookSearch() {
    // searchValue
    const [searchValue, setSearchValue] = useState("title");
    // searchReducer
    const [searchInfo, setSearchInfo] = useReducer(searchReducer, { numOfResults: 10 });
    //  searchArray
    const [searchArray, setSearchArray] = useState([]);
    // resultError
    const [resultError, setResultError] = useState(false);
    // showModal
    const [showModal, setShowModal] = useState(false);

    // function for searching with the google API
    const handleSearch = () => {
        // Check to see if numOfResults is greater than 40 or less than 10
        switch (true) {
            case (searchInfo.numOfResults > 40 || searchInfo.numOfResults < 10): {
                // Display resultError
                setResultError(true);
                break
            }
            default:
                setResultError(false);
            // Set the apiURL value
            let apiURL = apiSearch(searchValue, searchInfo);
            // Get the infomration from Google
            axios.get(apiURL).then(res => {
                // Set the results array
                setSearchArray(res.data.items);
                console.log(res.data.items);
            })
        }
    }

    return (
        <div>
            <SearchContext.Provider value={{ searchValue, setSearchValue, searchInfo, setSearchInfo, handleSearch, resultError }}>
                <SearchBar />
            </SearchContext.Provider>
            <SearchInfo.Provider value={{ searchArray, showModal, setShowModal }}>
                <SearchResults />
                <SearchModal />
            </SearchInfo.Provider>
        </div>
    );
};