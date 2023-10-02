import React, {
    useState
} from "react";

// CSS File
import "./styles/accordion-styles.css";

// Components
import BookCards from "./bookCards";

export default function AccordionView() {
    // prevId
    const [prevId, setPrevId] = useState("");

    const handleShowLib = event => {
        // First get the id of the element
        let elementId = event.target.id;
        // Get the next sibling
        let panel = document.getElementById(elementId).nextElementSibling;
        // Begin conditional
        // If elementId and prevId do not match AND prevId is defined
        if (elementId !== prevId && prevId !== "") {
            // Get the state of the prevPanel
            let prevPanel = document.getElementById(prevId).nextElementSibling;
            // Close the prev panel
            prevPanel.className = "panel";
            // Open the new panel
            panel.className += " responsive";
            // Set elementId to prevId
            setPrevId(elementId);
        }
        // If elementId and prevId match
        else if (elementId === prevId) {
            // Check the state of panel.className
            if (panel.className === "panel") {
                // Add the responsive class
                panel.className += " responsive";
            } else {
                // Set to have panel class only
                panel.className = "panel"
            }
        } 
        // The default
        else {
            // Open the new panel
            panel.className += " responsive";
            // Set elementId to prevId
            setPrevId(elementId);
        }
    }

    return (
        <div className="row">
            <div className="col-xs-12 col-s-12">
                {/* Accordion button */}
                <button className="accordion" id="libButton1" onClick={handleShowLib}>Library 1</button>
                {/* Panel for the accordion */}
                <div className="panel">
                    <BookCards />
                </div>
                <button className="accordion" id="libButton2" onClick={handleShowLib}>Library 2</button>
                {/* Panel for the accordion */}
                <div className="panel">
                    <BookCards />
                </div>
            </div>
        </div>
    );
};