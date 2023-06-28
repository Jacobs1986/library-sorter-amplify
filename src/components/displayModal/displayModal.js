import React, { useState } from "react";

// CSS File
import "./displayModal.css";

export default function DisplayModal() {
    const [ showModal, setShowModal ] = useState("none")

    // Create the function for opening the modal
    const handleOpenModal = () => {
        setShowModal("block");
    }

    // Close the modal
    const handleCloseModal = () => {
        setShowModal("none");
    }
    
    return (
        <>
            <button onClick={handleOpenModal}>Open modal</button>
            <div className="modal" style={{ display: `${showModal}`}}>
                <div className="modal-content">
                    <span className="close" onClick={handleCloseModal}>&times;</span>
                    <p>Some text in the Modal...</p>
                </div>
            </div>
        </>

    );
};