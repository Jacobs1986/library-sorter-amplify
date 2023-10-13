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
    // coverImage value
    const [coverImage, setCoverImage] = useState();
    // description value
    const [description, setDescription] = useState();
    // collectorInfo value
    const [collectorInfo, setCollectorInfo] = useReducer(dataReduc, dataDefaults);
    // libraryIdError
    const [libraryIdError, setLibraryIdError] = useState(false);
    // basicInfo value
    const [basicInfo, setBasicInfo] = useState();
    // dbInfo value
    const [dbInfo, setDbInfo] = useState();
    // addInfo value
    const [addInfo, setAddInfo] = useState(false);
    // saveInfo value
    const [saveInfo, setSaveInfo] = useState(false);

    // Get the book information from google 
    useEffect(() => {
        // If googleId is not undefined
        if (googleId) {
            // Run the api
            axios.get(`https://www.googleapis.com/books/v1/volumes/${googleId}`)
                .then(response => {
                    // Set the recievedData value
                    let recievedData = response.data.volumeInfo;
                    // Set the googleInfo value
                    setGoogleInfo(recievedData);
                    // Find the ISBN_13
                    let isbnSearch = recievedData.industryIdentifiers.find(o => o.type === "ISBN_13");
                    // Set the isbn
                    setGoogleISBN(isbnSearch);
                    // Set the coverImage
                    if (!recievedData.imageLinks) {
                        setCoverImage("./Images/blank-cover.png");
                    } else {
                        setCoverImage(recievedData.imageLinks.thumbnail)
                    }
                    // Get the description
                    if (!recievedData.description) {
                        setDescription("NA")
                    } else {
                        setDescription(recievedData.description);
                    }
                    // show the modal
                    setShowModal(!showModal);
                })
        }
    }, [googleId])

    // Add collectorInfo to basicInfo
    useEffect(() => {
        if (addInfo) {
            // Check to see if there is collector info
            switch (collectorInfo.collectorInfo) {
                case true:
                    setDbInfo({
                        ...basicInfo,
                        ...collectorInfo
                    })
                    break
                default:
                    setDbInfo({
                        ...basicInfo,
                        libraryID: collectorInfo.libraryID,
                        collectorInfo: collectorInfo.collectorInfo
                    })
            }
            setSaveInfo(true);
        }
    }, [addInfo])

    // Save the info
    useEffect(() => {
        if (saveInfo) {
            console.log(dbInfo);
        }
        setAddInfo(false);
        setSaveInfo(false);
    }, [saveInfo])

    // Function for closing the modal
    const handleHideModal = () => {
        // Clear googleId
        setGoogleId("");
        // toggle showModal
        setShowModal(!showModal);
        // Clear dbInfo
        setCollectorInfo({
            type: 'setDefault',
            value: dataDefaults
        })
    }

    // Function for saving the info
    const handleSaveData = () => {
        // Check to see if there is a libraryId
        if (!collectorInfo.libraryID) {
            // Display the error
            setLibraryIdError(true);
            return
        }
        // Hide the libraryId error
        setLibraryIdError(false);
        // Set the basic info
        setBasicInfo({
            title: googleInfo.title,
            cover: coverImage,
            author: googleInfo.authors,
            isbn: googleISBN.identifier,
            publisher: googleInfo.publisher,
            pubDate: googleInfo.publishedDate,
            description: description
        })
        setAddInfo(true);
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
                            <DataBaseInfo.Provider value={{ collectorInfo, setCollectorInfo }}>
                                <BookInfo.Provider value={{ googleInfo, coverImage, googleISBN, description, libraryIdError }} >
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