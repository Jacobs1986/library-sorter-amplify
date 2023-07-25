import React, { useReducer, createContext, useState, useContext } from "react";

// CSS File
import "./inputModal.css";

// Modal styling
import "../../styling/modal.css"

// Components
import InputForm from "./inputForm";
import CollectorInfo from "./collectorInfo";

// Import reducer
import { reducer as inputNewBookReduc } from "../../functions/reducer";

// Import API
import { API } from "aws-amplify";

// Import mutations
import { createBook } from "../../graphql/mutations";

// Import check list function
import  { inputChecklist } from "../../functions/inputChecklist";

// Import context
import { InputModalState } from "../../pages/search-page";

// Create and export context
export const NewBookInput = createContext();

export default function InputModal() {
    const [newBookInfo, setNewBookInfo] = useReducer(inputNewBookReduc, {});
    const [collectorInfo, setCollectorInfo] = useState(false);
    const [missingInfoAlert, setMissingInfoAlert] = useState(false);
    const { showInputModal, setShowInputModal } = useContext(InputModalState)

    // Function to save the input nodal inforation
    const handleSubmitInfo = (event) => {
        event.preventDefault();
        // First run the inputs through inputCheckList
        const inputCheck = inputChecklist(newBookInfo, collectorInfo);
        // If inputCheck is true set missingInfoAlert to true
        if (inputCheck === true) {
            setMissingInfoAlert(true);
            return
        }
        // set missingInfoAlert to false
        setMissingInfoAlert(false);
        // console.log(inputCheck);
        // Send informtion through API
        API.graphql({
            query: createBook,
            variables: { input: inputCheck}
        }).then(res => {
            console.log(res.data);
            setNewBookInfo({ reset: true });
            setMissingInfoAlert(false);
            setShowInputModal("none");
        })
    }

    // Close the input modal
    const handleCloseModal = (event) => {
        event.preventDefault();
        setMissingInfoAlert(false);
        setNewBookInfo({ reset: true });
        setShowInputModal("none");
    }

    return (
        <div className="modal inputNewBookModal" style={{ display: `${showInputModal}`}}>
            <div className="modal-content">
                <div className="modal-header">
                    <span className="close" onClick={handleCloseModal}>&times;</span>
                    <h2>Input Book Information</h2>
                </div>
                <div className="modal-body">
                    <h3>Use the fields below to enter book information</h3>
                    <NewBookInput.Provider value={{ newBookInfo, setNewBookInfo, missingInfoAlert, collectorInfo, setCollectorInfo }}>
                        <InputForm />
                        <CollectorInfo />
                    </NewBookInput.Provider>
                </div>
                <div className="modal-footer">
                    <button className="modal-saveButton" onClick={handleSubmitInfo}>Save Info</button>
                    <button className="modal-closeButton" onClick={handleCloseModal}>Close</button>
                    <p className={missingInfoAlert ? "moreInfoWarningActive" : "moreInfoWarningNull"}>Information needed</p>
                </div>
            </div>
        </div>
    );
};