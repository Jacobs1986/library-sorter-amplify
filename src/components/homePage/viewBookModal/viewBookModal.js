import React, {
    useContext,
    useEffect,
    useState
} from "react";

// CSS File
import "./viewBookModal-styles.css";
import "../../../styles/modal.css";

// Import context
import { LibInfo } from "../../../pages/home-page";

// Import API
import { API } from "aws-amplify";

// Import getBooks
import { getBooks } from "../../../graphql/queries";

export default function ViewBookModal() {
    // LibInfo values
    const { bookId, setBookId } = useContext(LibInfo);
    // showViewModal value
    const [showViewModal, setShowViewModal] = useState(false);
    // bookData value
    const [bookData, setBookData] = useState();

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
                            Modal body goes here.
                        </div>
                        {/* Modal Footer */}
                        <div className="modal-footer">
                            <h3>Footer content</h3>
                        </div>
                    </>
                }
            </div>
        </div>
    );
};