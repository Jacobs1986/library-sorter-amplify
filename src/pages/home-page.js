import React, {
    createContext,
    useState
} from "react";

// Components
// import CoverView from "../components/homePage/coverView";
import HomePageBanner from "../components/homePage/banner";
import NewLibraryForm from "../components/homePage/newLibraryForm";
// import TableView from "../components/homePage/table";
import ViewerRadios from "../components/homePage/viewerRadios";
import HomePageAccordion from "../components/homePage/homePageAccordion";

// Import testLibrary
import libraryList from "./testLibrary.json";

// Context
export const LibInfo = createContext();

export default function HomePage() {
    // Set the library view
    const [libraryView, setLibraryView] = useState("Covers");

    return (
        <div>
            {/* Home Page Banner */}
            <HomePageBanner />
            <LibInfo.Provider value={{ libraryView, setLibraryView, libraryList }}>
                {/* New Library form */}
                <NewLibraryForm />
                {/* Radios */}
                <ViewerRadios />
                <HomePageAccordion />
            </LibInfo.Provider>
        </div>
    );
};