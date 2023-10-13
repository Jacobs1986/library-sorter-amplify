import React, {
    createContext,
    useState
} from "react";

// Components
import HomePageBanner from "../components/homePage/banner/banner";
import NewLibraryForm from "../components/homePage/newLibraryForm/newLibraryForm";
import ViewerRadios from "../components/homePage/viewerRadios/viewerRadios";
import HomePageAccordion from "../components/homePage/homePageAccordion/homePageAccordion";

// Context
export const LibInfo = createContext();

export default function HomePage() {
    // Set the library view
    const [libraryView, setLibraryView] = useState("Covers");

    return (
        <div>
            {/* Home Page Banner */}
            <HomePageBanner />
            <LibInfo.Provider value={{ libraryView, setLibraryView }}>
                {/* New Library form */}
                <NewLibraryForm />
                {/* Radios */}
                <ViewerRadios />
                <HomePageAccordion />
            </LibInfo.Provider>
        </div>
    );
};