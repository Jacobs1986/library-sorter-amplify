import React, {
    useState
} from "react";

// CSS File
import "./styles/accordion-styles.css";

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
            <div className="col-xs-12">
                {/* Accordion button */}
                <button className="accordion" id="libButton1" onClick={handleShowLib}>Library 1</button>
                {/* Panel for the accordion */}
                <div className="panel">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <button className="accordion" id="libButton2" onClick={handleShowLib}>Library 2</button>
                {/* Panel for the accordion */}
                <div className="panel">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </div>
    );
};