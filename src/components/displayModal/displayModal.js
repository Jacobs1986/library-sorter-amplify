import React from "react";

// CSS File
import "./displayModal.css";

export default function DisplayModal() {
    return (
        <>
            <button>Open modal</button>
            <div id="myModal" className="modal">
                <div className="modal-content" >
                    <span className="close">&times;</span>
                    <p>Some text in the Modal...</p>
                </div>
            </div>
        </>

    );
};