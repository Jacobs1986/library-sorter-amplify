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
    const [prevPanel, setPrevPanel] = useState("");

    const handleShowLib = event => {
        // First get the id of the element
        let elementId = event.target.id;
        // Get the next sibling
        let panel = document.getElementById(elementId).nextElementSibling;
        // Check to see if there is a prevId
            // set the prevPanel
        // Begin the switch statment
            // If elementId and prevId do not match
                // Close the prevPanel
                // Open the new panel
                // set elementId to prevId
            // If elementId and prevId do match
                // Check the state of panel.className
                    // add responsive class
                    // set to panel class only
            // The default
                // Open the new panel
                // Set elementId to prevId
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