import React, { useState } from "react";

// CSS File
import "./displayModal.css";

export default function DisplayModal() {
    const [ showModal, setShowModal ] = useState("block")

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
                    <div className="modal-header">
                        <span className="close" onClick={handleCloseModal}>&times;</span>
                        <h2>Book Title</h2>
                    </div>
                    <div className="modal-body">
                        <p>Some text in the Modal body</p>
                        <p>Some other text...</p>
                    </div>
                </div>
            </div>
        </>

    );
};