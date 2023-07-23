import React from "react";

// CSS File
import "./inputModal.css";

// Modal styling
import "../../styling/modal.css"

// Components
import InputForm from "./inputForm";
import AdvancedForm from "./advancedForm";

export default function InputModal() {
    return (
        <div className="modal inputNewBookModal">
            <div className="modal-content">
                <div className="modal-header">
                    <span className="close">&times;</span>
                    <h2>Input Book Information</h2>
                </div>
                <div className="modal-body">
                    <h3>Use the fields below to enter book information</h3>
                    <InputForm />
                    <AdvancedForm />
                </div>
                <div className="modal-footer">
                    This is the modal's footer where the save and close buttons go
                </div>
            </div>
        </div>
    );
};