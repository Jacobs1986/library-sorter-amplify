import React from "react";

// CSS File
import "./styles/accordion-styles.css";

export default function AccordionView() {
    const handleShowLib = event => {
        // First get the id of the element
        let elementId = event.target.id;
        // Get the next sibling
        let panel = document.getElementById(elementId).nextElementSibling;
        console.log(panel.className);
        // If panel.className === "panel" add a responsive className
        if (panel.className === "panel") {
            panel.className += " responsive";
        } else {
            panel.className = "panel";
        }
    }
    // var acc = document.getElementsByClassName("accordion");
    // var i;

    // for (i = 0; i < acc.length; i++) {
    //     acc[i].addEventListener("click", function () {
    //         /* Toggle between adding and removing the "active" class,
    //         to highlight the button that controls the panel */
    //         this.classList.toggle("active");

    //         /* Toggle between hiding and showing the active panel */
    //         var panel = this.nextElementSibling;
    //         if (panel.style.display === "block") {
    //             panel.style.display = "none";
    //         } else {
    //             panel.style.display = "block";
    //         }
    //     });
    // }
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