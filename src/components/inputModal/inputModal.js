import React, { useReducer, createContext } from "react";

// CSS File
import "./inputModal.css";

// Modal styling
import "../../styling/modal.css"

// Components
import InputForm from "./inputForm";
import AdvancedForm from "./advancedForm";

// Import reducer
import { reducer as inputNewBookReduc } from "../../functions/reducer";

// Create and export context
export const NewBookInput = createContext();

export default function InputModal() {
    const [newBookInfo, setNewBookInfo] = useReducer(inputNewBookReduc, {});

    return (
        <div className="modal inputNewBookModal">
            <div className="modal-content">
                <div className="modal-header">
                    <span className="close">&times;</span>
                    <h2>Input Book Information</h2>
                </div>
                <div className="modal-body">
                    <h3>Use the fields below to enter book information</h3>
                    <NewBookInput.Provider value={{ newBookInfo, setNewBookInfo }}>
                        <InputForm />
                        <AdvancedForm />
                    </NewBookInput.Provider>
                </div>
                <div className="modal-footer">
                    <button className="modal-saveButton">Save Info</button>
                    <button className="modal-closeButton">Close</button>
                </div>
            </div>
        </div>
    );
};