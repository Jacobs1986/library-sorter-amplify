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
         // Check to see if the prevId is unknown
        // If it is defined then the previous panel needs to be closed
        if (prevId !== "") {
            // Set prevPanel variable
            let prevPanel = document.getElementById(prevId).nextElementSibling;
            // add responsive to panel.className
            panel.className += " responsive";
            // Remove responsive from the previous panel
            prevPanel.className = "panel";
            // set elementId to prevId
            setPrevId(elementId);
        } else {
            // add responsive to the panel.className
            panel.className += " responsive";
            // set elementId to prevId
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