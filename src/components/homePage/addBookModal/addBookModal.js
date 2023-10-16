import React, {
    useContext,
    useReducer,
    useState
} from "react";

// CSS File
import "./addBookModal-styles.css";

// Import contexts
import { Libraries } from "../../../App";

// Reducer
import { reducer as newBookReduc } from "../../../functions/reducer";

// Components
import BasicInfoForm from "./basicInfoForm";

// Default values
let defaultValues = {
    libraryID: "",
    title: ""
}

export default function AddBookModal() {
    // Libraries value
    const { libraries } = useContext(Libraries);
    // showModal value
    const [showModal, setShowModal] = useState(false);
    // newInfo value
    const [newInfo, setNewInfo] = useReducer(newBookReduc, defaultValues)

    // Function for inputing the new information
    const handleInputBookInfo = event => {
        setNewInfo({
            type: 'add',
            name: event.target.name,
            value: event.target.value
        })
    }

    // Function for hiding the modal
    const handleHideModal = () => {
        // Libraries values
        const { libraries } = useContext(Libraries);
        // toggle showModal
        setShowModal(!showModal);
    }

    return (
        <div className="modal">
            {/* Modal Content */}
            <div className="modal-content">
                {/* Modal Header */}
                <div className="modal-header">
                    <span className="close" onClick={handleHideModal}>&times;</span>
                    <h2 className="addModal-header">Add a Book</h2>
                </div>
                {/* Modal Body */}
                <div className="modal-body">
                    {/* Library select */}
                    <div className="row">
                        <div className="col-xs-12 col-s-4 col-m-3 col-lg-2 col-xl-2 modal-label">
                            Add to Library:
                        </div>
                        <div className="col-xs-12 col-s-4 col-m-4 col-lg-3 col-xl-2">
                            {!libraries ?
                                <select className="modal-form">
                                    <option value="">---</option>
                                </select> :
                                <select className="modal-form" name="libraryID" value={newInfo.libraryID} onChange={handleInputBookInfo} >
                                    <option value="">---</option>
                                    {libraries.map(name => (
                                        <option key={name.id} value={name.id}>{name.name}</option>
                                    ))}
                                </select>}
                        </div>
                    </div>
                    {/* Forms */}
                    <div className="row">
                        <div className="col-xs-12 col-s-12 col-m-12 col-lg-12 col-xl-12">
                            <BasicInfoForm />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-s-12 col-m-12 col-lg-12 col-xl-12">
                            The collector information form goes here.
                        </div>
                    </div>
                </div>
                {/* Modal Footer */}
                <div className="modal-footer">
                    <h3>Footer content</h3>
                </div>
            </div>
        </div>
    );
};