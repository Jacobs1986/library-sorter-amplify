import React, {
    createContext,
    useEffect,
    useState
} from "react";

// Components
import HomePageBanner from "../components/homePage/banner/banner";
import NewLibraryForm from "../components/homePage/newLibraryForm/newLibraryForm";
import ViewerRadios from "../components/homePage/viewerRadios/viewerRadios";
import HomePageAccordion from "../components/homePage/homePageAccordion/homePageAccordion";

// Import testLibrary
// import libraryList from "./testLibrary.json";

// Import API
import { API } from "aws-amplify";

// Import listLibraries
import { listLibraries } from "../graphql/queries";

// Import nameASC function
import { nameASC } from "../functions/arraySortFuncs";

// Context
export const LibInfo = createContext();

export default function HomePage() {
    // Set the library view
    const [libraryView, setLibraryView] = useState("Covers");
    // libraryList
    const [libraryList, setLibraryList] = useState("");
    // getLibrary
    const [getLibrary, setGetLibrary] = useState(false);

    // Get the information from the GraphQL database
    useEffect(() => {
        // Get the libraries
        API.graphql({
            query: listLibraries
        }).then(res => {
            // Set libraryList
            let resArray = res.data.listLibraries.items;
            // Sort the list
            let sorted = resArray.sort( nameASC );
            // Set sorted to setLibraryList
            setLibraryList(sorted);
            // set getLibrary to false
            setGetLibrary(false);
        })
    }, [getLibrary])

    return (
        <div>
            {/* Home Page Banner */}
            <HomePageBanner />
            <LibInfo.Provider value={{ libraryView, setLibraryView, libraryList, setGetLibrary }}>
                {/* New Library form */}
                <NewLibraryForm />
                {/* Radios */}
                <ViewerRadios />
                {!libraryList ? <div>Loading...</div>: <HomePageAccordion /> }
            </LibInfo.Provider>
        </div>
    );
};