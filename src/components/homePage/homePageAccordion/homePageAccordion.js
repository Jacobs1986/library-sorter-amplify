import React, {
    createContext,
    useContext
} from "react";

// CSS Files
import "./homePageAccordion-styles.css";
// Accordion style
import "../../../styles/accordion.css";

// Import contexts
import { Libraries } from "../../../App";
import { LibInfo } from "../../../pages/home-page";

// Import components
import BookCards from "../bookCards/bookCards";
import BookTable from "../bookTable/bookTable";

// Create and export BookList context
export const BookList = createContext();

export default function HomePageAccordion() {
    // Libraries values
    const { libraries } = useContext(Libraries)
    // LibInfo values
    const { libraryView, setAddShowModal } = useContext(LibInfo);

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

    // Function for showing the add book modal
    const handleShowAddModal = () => {
        setAddShowModal(true);
    }

    return (
        <>
            <div className="row accordionRow">
                <div className="col-xs-12 col-s-12">
                    {/* Check to see if there are any libraries in the database */}
                    {libraries.length === 0 ? <div>Let's make some libraries!</div> :
                        libraries.map((library, i) => (
                            <div key={i}>
                                {/* Accordion button */}
                                <button className="accordion" id={library.id} onClick={handleShowPanel}>{library.name}</button>
                                {/* Accordion panel */}
                                <div className="panel">
                                    <BookList.Provider value={{ library }}>
                                        {/* Add book links */}
                                        <div>
                                            <a href="/search">Search for books</a> or <span className="span-link" onClick={handleShowAddModal}>Add book manually</span>
                                        </div>
                                        {libraryView === "Covers" ?
                                            <BookCards /> :
                                            // <div>This is the table view</div>
                                            <BookTable />
                                        }
                                    </BookList.Provider>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div >
        </>
    );
};