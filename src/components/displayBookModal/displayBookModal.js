import React, {
    useState,
    useEffect,
    useContext
} from "react";
import parse from 'html-react-parser';

// CSS File
import "./displayBookModal.css";

// Import API
import { API } from "aws-amplify";

// Import getBook from queries
import { getBook } from "../../graphql/queries";

// Import BookIdContext
import { BookIdContext } from "../homeDisplay/homeDisplay";

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
                            <div className="container">
                                <div className="row">
                                    <div className="col-5">
                                        <img
                                            src={bookInfo.cover}
                                            alt="Book cover"
                                            style={{ width: "100%" }}
                                        />
                                    </div>
                                    <div className="col-7 bookInfo">
                                        <p><span className="modalInlineLabel" style={{ fontWeight: "bold" }}>Author</span>: {bookInfo.author}</p>
                                        <p><span className="modalInlineLabel" style={{ fontWeight: "bold" }}>Publisher</span>: {bookInfo.publisher}</p>
                                        <p><span className="modalInlineLabel" style={{ fontWeight: "bold" }}>Publication Date:</span> {bookInfo.pubDate}</p>
                                        <p><span className="modalInlineLabel" style={{ fontWeight: "bold" }}>ISBN</span>: {bookInfo.isbn}</p>
                                        <p><span className="modalInlineLabel" style={{ fontWeight: "bold" }}>Page Count</span>: {bookInfo.numOfPages}</p>
                                        <p><span className="modalInlineLabel" style={{ fontWeight: "bold" }}>Synopsis</span>:</p>
                                        <div id="descriptionParagraph">
                                            {!bookInfo.synopsis ? bookInfo.synopsis : parse(bookInfo.synopsis)}
                                        </div>
                                    </div>
                                </div>
                            </div>
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