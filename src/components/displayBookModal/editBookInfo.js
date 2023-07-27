import React from "react";

// CSS File
import "./displayBookModal.css";

export default function EditBookInfo() {
    return (
        <form className="displayEditForm">
            {/* Edit title */}
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <label htmlFor="newTitle">Title</label>
                        <input id="newTitle" type="text" name="title" />
                    </div>
                </div>
            </div>
        </form>
    );
};