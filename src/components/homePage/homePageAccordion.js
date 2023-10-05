import React, {
    useContext
} from "react";

// CSS Files
import "./styles/homePageAccordion-styles.css";
// Accordion style
import "../../styles/accordion.css";

// Import context
import { LibInfo } from "../../pages/home-page";

export default function HomePageAccordion() {
    // libraryList
    const { libraryList } = useContext(LibInfo);

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
            <div className="col-xs-12 col-xl-12">
                {libraryList.map((library, i) => (
                    <div key={i}>
                        {/* Accordion button */}
                        <button className="accordion" id={library.id} onClick={handleShowPanel}>{library.name}</button>
                        {/* Accordion panel */}
                        <div className="panel">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
};