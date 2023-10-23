import React, { 
    useContext,
    usState 
} from "react";

// CSS File
import "./viewBookModal-styles.css";

// Import context
import { BookData } from "./viewBookModal";

export default function DeleteBook() {
    // BookData values
    const { showDeleteModal, setShowDeleteModal, bookData, handleDeleteBook } = useContext(BookData);

    // Function for hiding the modal
    const handleHideDeleteModal = () => {
        // toggle showModal
        setShowDeleteModal(false);
    }

    return (
        <div className="modal" style={!showDeleteModal ? { display: "none"} : { display: "block"} } >
            {/* Modal Content */}
            <div className="modal-content" id="deleteModal-content">
                {/* Modal Header */}
                <div className="modal-header">
                    <span className="close" onClick={handleHideDeleteModal}>&times;</span>
                    <h2 className="center-modal-header">Delete {bookData.title}?</h2>
                </div>
                {/* Modal Body */}
                <div className="modal-body">
                    Are you sure that you want to delete this book? You will lose all of the information you have saved so far.
                </div>
                {/* Modal Footer */}
                <div className="modal-footer" id="deleteModal-footer">
                    <div className="button modalButton-btm btnStop" onClick={handleHideDeleteModal}>No</div>
                    <div className="button modalButton-btm btnGo" onClick={handleDeleteBook}>Yes</div>
                </div>
            </div>
        </div>
    );
};