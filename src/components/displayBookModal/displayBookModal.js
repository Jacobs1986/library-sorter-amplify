import React, {
    useState
} from "react";

// CSS File
import "./displayBookModal.css";

export default function DisplayBookModal() {
    // Hook for showing displayModal
    const [showDisplayModal, setShowDisplayModal] = useState("block");

    // Function for closing the modal
    const handleCloseDisplay = () => {
        setShowDisplayModal("none")
    }

    return (
        <div className="modal" style={{ display: `${showDisplayModal}` }}>
            <div className="modal-content">
                <div className="modal-header">
                    <span className="close" onClick={handleCloseDisplay}>&times;</span>
                    <h2>Book Title</h2>
                </div>
            </div>
        </div>
    );
};