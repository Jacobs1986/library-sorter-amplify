import React, { useReducer, createContext, useState } from "react";

// CSS File
import "./inputModal.css";

// Modal styling
import "../../styling/modal.css"

// Components
import InputForm from "./inputForm";
import AdvancedForm from "./advancedForm";

// Import reducer
import { reducer as inputNewBookReduc } from "../../functions/reducer";

// Import API
import { API } from "aws-amplify";

// Import mutations
import { createBook } from "../../graphql/mutations";

// Import check list function
import  inputChecklist from "../../functions/inputChecklist";

// Create and export context
export const NewBookInput = createContext();

export default function InputModal() {
    const [newBookInfo, setNewBookInfo] = useReducer(inputNewBookReduc, {});
    const [missingInfoAlert, setMissingInfoAlert] = useState(false);

    // Function to save the input nodal inforation
    const handleSubmitInfo = () => {
        // First run the inputs through inputCheckList
        const inputCheck = inputChecklist(newBookInfo);
        // If inputCheck is true set missingInfoAlert to true
        if (inputCheck === true) {
            setMissingInfoAlert(true);
            return
        }
        // set missingInfoAlert to false
        setMissingInfoAlert(false);
        // Send informtion through API
        API.graphql({
            query: createBook,
            variables: { input: inputCheck}
        }).then(res => {
            console.log(res.data);
        })
    }

    return (
        <div className="modal inputNewBookModal">
            <div className="modal-content">
                <div className="modal-header">
                    <span className="close">&times;</span>
                    <h2>Input Book Information</h2>
                </div>
                <div className="modal-body">
                    <h3>Use the fields below to enter book information</h3>
                    <NewBookInput.Provider value={{ newBookInfo, setNewBookInfo, missingInfoAlert }}>
                        <InputForm />
                        <AdvancedForm />
                    </NewBookInput.Provider>
                </div>
                <div className="modal-footer">
                    <button className="modal-saveButton" onClick={handleSubmitInfo}>Save Info</button>
                    <button className="modal-closeButton">Close</button>
                    <p className={missingInfoAlert ? "moreInfoWarningActive" : "moreInfoWarningNull"}>Information needed</p>
                </div>
            </div>
        </div>
    );
};