import React from "react";

// CSS File
import "./styles/newLibraryForm-styles.css";

export default function NewLibraryForm() {
    return (
        <div>
            {/* Button to show the form */}
            <div className="row">
                <div className="col-xs-12">
                    <button>Add New Library</button>
                </div>
            </div>
        </div>
    );
};