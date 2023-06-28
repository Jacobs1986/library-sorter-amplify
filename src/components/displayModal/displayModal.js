import React from "react";

// CSS File
import "./displayModal.css";

export default function DisplayModal() {
    // Set modal variable
    const modal = document.getElementById("myModal");
    // Get the class name of the span
    const span = document.getElementsByClassName("close");

    // Create the function for opening the modal
    const handleOpenModal = (event) => {
        event.preventDefault();
        modal.style.display = "block";
    }
    
    return (
        <>
            <button onClick={handleOpenModal}>Open modal</button>
            <div id="myModal" className="modal">
                <div className="modal-content" >
                    <span className="close">&times;</span>
                    <p>Some text in the Modal...</p>
                </div>
            </div>
        </>

    );
};