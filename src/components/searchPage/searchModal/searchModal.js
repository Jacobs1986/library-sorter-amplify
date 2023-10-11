import React, {
    useContext
} from "react";

// CSS File
import "./searchModal-styles.css";
import "../../../styles/modal.css";

// Context
import { SearchInfo } from "../../../pages/book-search-page";

export default function SearchModal() {
    // context values
    const { showModal, setShowModal } = useContext(SearchInfo);

    // Handle show modal
    const handleShowModal = event => {
        event.preventDefault();
        setShowModal(!showModal);
    }

    return (
        <>
            {/* The Modal */}
            <div id="myModal" className="modal" style={showModal ? { display: "block" } : { display: "none" }}>
                {/* Modal content */}
                <div className="modal-content">
                    {/* Modal Header */}
                    <div className="modal-header">
                        <span className="close" onClick={handleShowModal}>&times;</span>
                        <h2>Modal Header</h2>
                    </div>
                    {/* Modal Body */}
                    <div className="modal-body">
                        <p>Some text in the Modal Body.</p>
                        <p>Some other text...</p>
                    </div>
                    {/* Modal Footer */}
                    <div className="modal-footer">
                        <h3>Modal Footer</h3>
                    </div>
                </div>
            </div>
            <div>
                <button onClick={handleShowModal}>Show Modal</button>
            </div>
        </>
    );
};