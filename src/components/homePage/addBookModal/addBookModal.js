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

// Default values
let defaultValues = {
    libraryID: "",
    title: "",
    cover: "",
    author: "",
    isbn: "",
    publisher: "",
    pubDate: ""
}

// Context
export const NewInfoContext = createContext();

export default function AddBookModal() {
    // Libraries value
    const { libraries } = useContext(LibInfo);
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
        // toggle showModal
        setShowModal(!showModal);
    }

    return (
        <div className="modal" style={showModal ? { display: "block" } : { display: "none" }}>
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
                    <NewInfoContext.Provider value={{ newInfo, setNewInfo, handleInputBookInfo }}>
                        <BasicInfoForm />
                        <CoverAndDescription />
                        The collector form goes here
                    </NewInfoContext.Provider>
                </div>
                {/* Modal Footer */}
                <div className="modal-footer">
                    <h3>Footer content</h3>
                </div>
            </div>
        </div>
    );
};