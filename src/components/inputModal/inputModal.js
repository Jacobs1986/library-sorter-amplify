import React from "react";

// CSS File
import "./inputModal.css";

// Modal styling
import "../../styling/modal.css"

export default function InputModal() {
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <span className="close">&times;</span>
                    <h2>Input Book Information</h2>
                </div>
                <div className="modal-body">
                    <h3>Use the fields below to enter book information</h3>
                    <form>
                        <div className="container">
                            {/* Input for Title */}
                            <div className="row">
                                <div className="col-12">
                                    <label htmlFor="newTitle">Title</label>
                                    <input id="newTitle" type="text" name="newTitle" />
                                </div>
                            </div>
                            <div className="row">
                                {/* Author */}
                                <div className="col-6">
                                    <label htmlFor="newAuthor">Author(s)</label>
                                    <input id="newAuthor" type="text" name="newAuthor" />
                                    <p style={{ margin: "0"}}>Use a comma to separate multiple authors</p>
                                </div>
                                {/* Publisher */}
                                <div className="col-6">
                                    <label htmlFor="newPublisher">Publisher</label>
                                    <input id="newPublisher" type="text" name="newPublisher" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};