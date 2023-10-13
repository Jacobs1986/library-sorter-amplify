import React, {
    createContext,
    useContext,
    useEffect,
    useState
} from "react";

// CSS File
import "./searchModal-styles.css";
import "../../../styles/modal.css";

// Axios
import axios from "axios";

// Components
import BasicInfo from "./basicInfo";
import CollectorForm from "./collectorForm";

// Import contexts
import { SearchInfo } from "../../../pages/book-search-page";

// Export context
export const BookInfo = createContext();

export default function SearchModal() {
    // SearchInfo values
    const { googleId, setGoogleId } = useContext(SearchInfo);
    // showModal value
    const [showModal, setShowModal] = useState(false);
    // googleInfo value
    const [googleInfo, setGoogleInfo] = useState();
    // googleISBN value
    const [googleISBN, setGoogleISBN] = useState();

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
                            <BookInfo.Provider value={{ googleInfo, googleISBN }} >
                                <BasicInfo />
                            </BookInfo.Provider>
                            <CollectorForm />
                        </div>
                        {/* Modal Footer */}
                        <div className="modal-footer searchModal-footer">
                           <div className="button modalButton-btm btnStop" onClick={handleHideModal}>Cancel</div>
                           <div className="button modalButton-btm btnGo">Save</div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};