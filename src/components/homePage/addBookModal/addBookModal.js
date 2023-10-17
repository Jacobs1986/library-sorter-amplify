import React, {
    createContext,
    useContext,
    useReducer,
    useState
} from "react";

// CSS File
import "./addBookModal-styles.css";

// Import contexts
import { LibInfo } from "../../../pages/home-page";

// Reducer
import { reducer as newBookReduc } from "../../../functions/reducer";

// Components
import BasicInfoForm from "./basicInfoForm";
import CoverAndDescription from "./coverAndDescriptionForm";
import CollectorForm from "./collectorForm";

// Import API
import { API } from "aws-amplify";

// Import createBooks
import { createBooks } from "../../../graphql/mutations";

// Basic default values
let basicDefaultValues = {
    libraryID: "",
    title: "",
    cover: "",
    author: "",
    isbn: "",
    publisher: "",
    pubDate: "",
    description: ""
}

// Collector default values
let collectorDefaultValues = {
    collectorInfo: false,
    acquisitionDate: "",
    acquiredFrom: "",
    acquisitionCost: "",
    edition: "",
    printing: "",
    condition: "",
    dustJacket: "",
    jacketCondition: "",
    additionalNotes: ""
}

// Context
export const NewInfoContext = createContext();

export default function AddBookModal() {
    // Libraries value
    const { libraries, showAddModal, setAddShowModal } = useContext(LibInfo);
    // newInfo value
    const [basicInfo, setBasicInfo] = useReducer(newBookReduc, basicDefaultValues)
    // collectorInfo value
    const [collectorInfo, setCollectorInfo] = useReducer(newBookReduc, collectorDefaultValues);

    // Function for hiding the modal
    const handleHideModal = () => {
        // toggle showModal
        setAddShowModal(false);
        // reset information
        setNewInfo({
            type: 'setDefault',
            value: defaultValues
        })
    }

    // Function for saving the information
    const handleSaveInfo = () => {
        // Convert author string into array
        let authorArray = basicInfo.author.split(",");
        // Put authorArray into newInfo
        setNewInfo({
            type: 'add',
            name: 'author',
            value: authorArray
        })
    }

    return (
        <div className="modal" style={showAddModal ? { display: "block" } : { display: "none" }}>
            {/* Modal Content */}
            <div className="modal-content">
                {/* Modal Header */}
                <div className="modal-header">
                    <span className="close" onClick={handleHideModal}>&times;</span>
                    <h2 className="addModal-header">Add a Book</h2>
                </div>
                {/* Modal Body */}
                {/* Library select */}
                <div className="row">
                    <div className="col-xs-12 col-s-4 col-m-3 col-lg-2 col-xl-2 modal-label">
                        Add to Library:
                    </div>
                    <div className="col-xs-12 col-s-4 col-m-4 col-lg-3 col-xl-2">
                        <select className="modal-input" name="libraryID" value={newInfo.libraryID} onChange={handleInputBookInfo} >
                            <option value="">---</option>
                            {libraries.map(name => (
                                <option key={name.id} value={name.id}>{name.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="modal-body">
                    {/* Forms */}
                    <NewInfoContext.Provider value={{ basicInfo, setBasicInfo, collectorInfo, setCollectorInfo }}>
                        <BasicInfoForm />
                        <CoverAndDescription />
                        <CollectorForm />
                    </NewInfoContext.Provider>
                </div>
                {/* Modal Footer */}
                <div className="modal-footer addBookModal-footer">
                    <div className="button modalButton-btm btnStop" onClick={handleHideModal}>Cancel</div>
                    <div className="button modalButton-btm btnGo" onClick={handleSaveInfo}>Save</div>
                </div>
            </div>
        </div>
    );
};