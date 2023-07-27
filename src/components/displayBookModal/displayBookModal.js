import React, {
    createContext,
    useState,
    useEffect,
    useContext
} from "react";

// CSS File
import "./displayBookModal.css";

// Import API
import { API } from "aws-amplify";

// Import getBook from queries
import { getBook } from "../../graphql/queries";

// Import BookIdContext
import { BookIdContext } from "../homeDisplay/homeDisplay";

// Import components
import BasicBookInfo from "./basicBookInfo";

// Create context
export const BookInfoContext = createContext();

export default function DisplayBookModal() {
    // Set hooks from context
    const { bookId, setBookId } = useContext(BookIdContext)
    // Hook for showing displayModal
    const [showDisplayModal, setShowDisplayModal] = useState("none");
    // Book info hook
    const [bookInfo, setBookInfo] = useState();

    useEffect(() => {
        if (bookId) {
            API.graphql({
                query: getBook,
                variables: { id: bookId }
            }).then(res => {
                setBookInfo(res.data.getBook);
                setShowDisplayModal("block")
            })
        }
    }, [bookId])

    // Function for closing the modal
    const handleCloseDisplay = () => {
        setShowDisplayModal("none")
        setBookId('');
    }

    return (
        <div>
            {!bookInfo ? <div></div> :
                <div className="modal" style={{ display: `${showDisplayModal}` }}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <span className="close" onClick={handleCloseDisplay}>&times;</span>
                            <h2>{bookInfo.title}</h2>
                        </div>
                        <div className="modal-body">
                            <BookInfoContext.Provider value={{ bookInfo }}>
                                <BasicBookInfo />
                            </BookInfoContext.Provider>
                        </div>
                        <div className="modal-footer">
                            <button className="modal-closeButton" onClick={handleCloseDisplay}>Close</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};