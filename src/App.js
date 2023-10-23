import React, {
    createContext,
    useEffect,
    useState
} from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

// Styling
import './App.css';
import "./styles/layout.css";
import "./styles/buttons.css";

// Pages
import HomePage from "./pages/home-page";
import BookSearch from "./pages/book-search-page";

// Import API
import { API } from "aws-amplify";

// Import listLibraries
import { listLibraries } from "./graphql/queries";

// Import sorting function
import { nameASC } from "./functions/arraySortFuncs";

// Contexts
export const Libraries = createContext();

function App() {
    // libraries value
    const [libraries, setLibraries] = useState();
    // getLibrary
    const [getLibrary, setGetLibrary] = useState(true);

    // Get the libraries from the database
    useEffect(() => {
        switch (true) {
            case getLibrary: {
                API.graphql({ query: listLibraries })
                    .then(response => {
                        // set the response to libList
                        let libList = response.data.listLibraries.items;
                        // sort the list
                        let sortList = libList.sort(nameASC);
                        // set the list
                        setLibraries(sortList);
                        console.log(sortList);
                    })
                break
            }
            default:
        }
        setGetLibrary(false);
    }, [getLibrary]);

    return (
        <div>
            <Libraries.Provider value={{ libraries, setGetLibrary }} >
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/search" element={<BookSearch />} />
                    </Routes>
                </BrowserRouter>
            </Libraries.Provider>
        </div>
    );
}

export default App;