import React, {
    createContext,
    useContext,
    useEffect,
    useState
} from "react";

// CSS File
import "./viewBookModal-styles.css";
import "../../../styles/modal.css";

// Import context
import { Libraries } from "../../../App";
import { LibInfo } from "../../../pages/home-page";

// Components
import BasicInfo from "./basicInfo";
import CollectorInfo from "./collectorInfo";
import DeleteBook from "./deleteBook";

// Import API
import { API } from "aws-amplify";

// Import getBooks
import { getBooks } from "../../../graphql/queries";

// Import deleteBooks
import { deleteBooks } from "../../../graphql/mutations";

// Create context
export const BookData = createContext();

export default function ViewBookModal() {
    // Libraries value
    const { setGetLibrary } = useContext(Libraries);
    // LibInfo values
    const { bookId, setBookId } = useContext(LibInfo);
    // showViewModal value
    const [showViewModal, setShowViewModal] = useState(false);
    // bookData value
    const [bookData, setBookData] = useState();
    // showDeleteModal
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    // Get the book information
    useEffect(() => {
        if (bookId !== "") {
            API.graphql({
                query: getBooks,
                variables: { id: bookId }
            }).then(res => {
                setBookData(res.data.getBooks);
                // Show the modal
                setShowViewModal(true);
                console.log(res.data.getBooks);
            })
        }
    }, [bookId])

    // Function for hiding the modal
    const handleHideModal = () => {
        // Reset bookId
        setBookId("");
        // Hide the modal
        setShowViewModal(false);
    }

    // Function for showing the delete modal
    const handleShowDeleteModal = () => {
        setShowDeleteModal(true);
    }

    // Function for deleting the book
    const handleDeleteBook = () => {
        // Delete the book
        API.graphql({
            query: deleteBooks,
            variables: { input: { id: bookId }}
        }).then(() => {
            // Hide deleteModal
            setShowDeleteModal(false);
            // Set getLibraries to true
            setGetLibrary(true);
            // Run hide modal function
            handleHideModal();
        })
    }

    return (
        <div className="modal" style={!showViewModal ? { display: "none" } : { display: "block" }}>
            {/* Modal Content */}
            <div className="modal-content">
                {!bookData ? <></> :
                    <>
                        {/* Modal Header */}
                        <div className="modal-header">
                            <span className="close" onClick={handleHideModal}>&times;</span>
                            <h2 className="book-title">{bookData.title}</h2>
                        </div>
                        {/* Modal Body */}
                        <div className="modal-body">
                            <BookData.Provider value={{ bookData, showDeleteModal, setShowDeleteModal, handleDeleteBook }}>
                                <BasicInfo />
                                {!bookData.collectorInfo ? <></> : <CollectorInfo /> }
                                <DeleteBook /> 
                            </BookData.Provider>
                        </div>
                        {/* Modal Footer */}
                        <div className="modal-footer viewBookModal-footer">
                            <div className="button modalButton-btm" onClick={handleHideModal}>Close</div>
                            <div className="button modalButton-btm btnStop" onClick={handleShowDeleteModal}>Delete Book</div>
                        </div>
                    </>
                }
            </div>
        </div>
    );
};