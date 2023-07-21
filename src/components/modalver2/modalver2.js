import React, { useState } from "react";

// CSS File
import "./modalver2.css";

export default function ModalVer2() {
    // toggle modal state
    const [ showModal, setShowModal ] = useState("block")

     // Close the modal
     const handleCloseModal = () => {
        setShowModal("none");
    }

    return (
        <div className="modal" style={{ display: `${showModal}` }}>
            <div className="modal-content">
                <div className="modal-header">
                    <span className="close" onClick={handleCloseModal}>&times;</span>
                    <h2>Tabbed Modal</h2>
                </div>
                <div className="modal-body">
                    <div className="modal-tabs">
                        <button className="tab">Tab 1</button>
                        <button className="tab">Tab 2</button>
                    </div>
                    <p>This is the first tab</p>
                </div>
            </div>
        </div>
    );
};