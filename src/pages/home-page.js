import React, {
    createContext,
    useEffect,
    useState
} from "react";

// Components
import HomePageBanner from "../components/homePage/banner";
import NewLibraryForm from "../components/homePage/newLibraryForm";
import ViewerRadios from "../components/homePage/viewerRadios";
import HomePageAccordion from "../components/homePage/homePageAccordion";

// Import testLibrary
// import libraryList from "./testLibrary.json";

// Import API
import { API } from "aws-amplify";

// Import listLibraries
import { listLibraries } from "../graphql/queries";

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
            setLibraryList(res.data.listLibraries.items);
            // console.log(res.data.listLibraries.items);
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