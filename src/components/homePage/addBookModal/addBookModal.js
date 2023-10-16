import React, {
    useState
} from "react";

// CSS File
import "./addBookModal-styles.css";

export default function AddBookModal() {
    // showModal value
    const [showModal, setShowModal] = useState(false);

    // Function for hiding the modal
    const handleHideModal = () => {
        // toggle showModal
        setShowModal(!showModal);
    }

    return (
        <div className="modal">
            {/* Modal Content */}
            <div className="modal-content">
                {/* Modal Header */}
                <div className="modal-header">
                    <span className="close" onClick={handleHideModal}>&times;</span>
                    <h2 className="addModal-header">Add a Book</h2>
                </div>
                {/* Modal Body */}
                <div className="modal-body">
                    Modal body goes here.
                </div>
                {/* Modal Footer */}
                <div className="modal-footer">
                    <h3>Footer content</h3>
                </div>
            </div>
        </div>
    );
};