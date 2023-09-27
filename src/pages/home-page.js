import React, {
    createContext,
    useState
} from "react";

// Components
import AccordionView from "../components/homePage/accordion";
import HomePageBanner from "../components/homePage/banner";
import NewLibraryForm from "../components/homePage/newLibraryForm";
import TableView from "../components/homePage/table";
import ViewerRadios from "../components/homePage/viewerRadios";

// Context
export const LibInfo = createContext();

export default function HomePage() {
    // Set the library view
    const [libraryView, setLibraryView] = useState("Accordion")
    return (
        <div>
            {/* Home Page Banner */}
            <HomePageBanner />
            <LibInfo.Provider value={{ libraryView, setLibraryView }}>
                {/* Radios */}
                <ViewerRadios />
                {/* Accordion View */}
                <AccordionView />
                {/* Table view */}
                <TableView />
                {/* New Library form */}
                <NewLibraryForm />
            </LibInfo.Provider>
        </div>
    );
};