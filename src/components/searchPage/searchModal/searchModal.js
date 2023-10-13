import React, {
    createContext,
    useContext,
    useEffect,
    useReducer,
    useState
} from "react";

// CSS File
import "./searchModal-styles.css";
import "../../../styles/modal.css";

// Axios
import axios from "axios";

// Import reducer
import { reducer as dataReduc } from "../../../functions/reducer";

// Components
import BasicInfo from "./basicInfo";
import CollectorForm from "./collectorForm";

// Import contexts
import { SearchInfo } from "../../../pages/book-search-page";

// default vaules
let dataDefaults = {
    libraryID: "",
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

// Export context
export const BookInfo = createContext();
export const DataBaseInfo = createContext();

export default function SearchModal() {
    // SearchInfo values
    const { googleId, setGoogleId } = useContext(SearchInfo);
    // showModal value
    const [showModal, setShowModal] = useState(false);
    // googleInfo value
    const [googleInfo, setGoogleInfo] = useState();
    // googleISBN value
    const [googleISBN, setGoogleISBN] = useState();
    // dbInfo value
    const [dbInfo, setDbInfo] = useReducer(dataReduc, dataDefaults);

    useEffect(() => {
        // If googleId is not undefined
        if (googleId) {
            // Run the api
            axios.get(`https://www.googleapis.com/books/v1/volumes/${googleId}`)
            .then(response => {
                // Set the googleInfo value
                setGoogleInfo(response.data.volumeInfo);
                // Find the ISBN_13
                let isbnSearch = response.data.volumeInfo.industryIdentifiers.find(o => o.type === "ISBN_13");
                // Set the isbn
                setGoogleISBN(isbnSearch);
                // show the modal
                setShowModal(!showModal);
            })
        }
    }, [googleId])

    // Function for closing the modal
    const handleHideModal = () => {
        // Clear googleId
        setGoogleId("");
        // toggle showModal
        setShowModal(!showModal);
        // Clear dbInfo
        setDbInfo({
            type: 'setDefault',
            value: dataDefaults
        })
    }

    // Function for saving the info
    const handleSaveData = () => {
        console.log(dbInfo);
    }

    return (
        <>
            {!showModal ? <></> :
                <div className="modal">
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                            <span className="close" onClick={handleHideModal}>&times;</span>
                            <h2 className="book-title">{googleInfo.title}</h2>
                        </div>
                        {/* Modal Body */}
                        <div className="modal-body">
                            <DataBaseInfo.Provider value={{ dbInfo, setDbInfo }}>
                                <BookInfo.Provider value={{ googleInfo, googleISBN }} >
                                    <BasicInfo />
                                </BookInfo.Provider>
                                <CollectorForm />
                            </DataBaseInfo.Provider>
                        </div>
                        {/* Modal Footer */}
                        <div className="modal-footer searchModal-footer">
                           <div className="button modalButton-btm btnStop" onClick={handleHideModal}>Cancel</div>
                           <div className="button modalButton-btm btnGo" onClick={handleSaveData}>Save</div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};