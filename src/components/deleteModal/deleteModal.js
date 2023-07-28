import React, {
    useContext
} from "react";

// CSS File
import "./deleteModal.css";

// Import context
import { DeleteBookContext } from "../displayBookModal/displayBookModal";

export default function DeleteModal() {
    // set context hooks
    const { showDeleteModal, bookInfo } = useContext(DeleteBookContext)

    return (
        <div className="deleteModal" style={{ display: `${showDeleteModal}` }}>
            <div className="deleteModal-content">
                <div className="container">
                    <h1>Delete Book?</h1>
                    <p>Are you sure you want to delete <span className="bookName">{bookInfo.title}</span> from your library? All information will be removed.</p>
                    <div className="buttonContainer">
                        <button className="yesDeleteButton" name="yesDeleteButton">Yes</button>
                        <button className="noDeleteButton" name="noDeleteButton">No</button>
                    </div>
                </div>
            </div>
        </div>
    );
};