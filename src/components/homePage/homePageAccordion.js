import React, {
    createContext,
    useContext
} from "react";

// CSS Files
import "./styles/homePageAccordion-styles.css";
// Accordion style
import "../../styles/accordion.css";

// Import context
import { LibInfo } from "../../pages/home-page";

// Import components
import BookCards from "./bookCards";
import BookTable from "./bookTable";

// Create and export BookList context
export const BookList = createContext();

export default function HomePageAccordion() {
    // libraryList
    const { libraryList, libraryView } = useContext(LibInfo);

    // Function for showing a panel
    const handleShowPanel = event => {
        // set the element
        let element = document.getElementById(event.target.id);
        // Toggle the classList for the element
        element.classList.toggle("active");
        // Get the panel
        let panel = element.nextElementSibling;
        // Add a showPanel to the className
        switch (panel.className) {
            // If panel.className === panel
            case "panel":
                // Add showPanel
                panel.className += " showPanel";
                break
            // Default
            default:
                // Remove showPanel
                panel.className = "panel"
        }
    }
    return (
        <div className="row">
            <div className="col-xs-12 col-s-12">
                {libraryList.map((library, i) => (
                    <div key={i}>
                        {/* Accordion button */}
                        <button className="accordion" id={library.id} onClick={handleShowPanel}>{library.name}</button>
                        {/* Accordion panel */}
                        <div className="panel">
                            <BookList.Provider value={{ library }}>
                                {libraryView === "Covers" ?
                                    <BookCards /> :
                                    // <div>This is the table view</div>
                                    <BookTable />
                                }
                            </BookList.Provider>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
};