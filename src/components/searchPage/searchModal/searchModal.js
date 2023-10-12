import React from "react";

// CSS File
import "./searchModal-styles.css";
import "../../../styles/modal.css";

export default function SearchModal() {
    return (
        <div className="modal">
            <div className="modal-content">
                {/* Modal Header */}
                <div class="modal-header">
                    <span className="close">&times;</span>
                    <h2>Modal Header</h2>
                </div>
                {/* Modal Body */}
                <div className="modal-body">
                    <p>Some text in the Modal Body</p>
                    <p>Some other text...</p>
                </div>
                {/* Modal Footer */}
                <div className="modal-footer">
                    <h3>Modal Footer</h3>
                </div>
            </div>
        </div>
    );
};