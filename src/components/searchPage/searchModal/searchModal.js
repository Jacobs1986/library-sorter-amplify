import React, {
    useEffect,
    useContext,
    useState
} from "react";
import parse from 'html-react-parser';

// CSS File
import "./searchModal-styles.css";
import "../../../styles/modal.css";

// Axios
import axios from "axios";

// Context
import { SearchInfo } from "../../../pages/book-search-page";

export default function SearchModal() {
    // context values
    const { googleId } = useContext(SearchInfo);
    // showModal
    const [showModal, setShowModal] = useState(false);
    // book info
    const [bookInfo, setBookInfo] = useState();
    // ISBN
    const [bookISBN, setBookISBN] = useState();

    useEffect(() => {
        if (googleId) {
            axios.get(`https://www.googleapis.com/books/v1/volumes/${googleId}`)
                .then(res => {
                    setBookInfo(res.data.volumeInfo);
                    console.log(res.data.volumeInfo);
                    // Find ISBN
                    let data = res.data.volumeInfo.industryIdentifiers;
                    let isbn = data.find(o => (
                        o.type === "ISBN_13"
                    ))
                    setBookISBN(isbn);
                    setShowModal(!showModal);
                })
        }
    }, [googleId]);

    // Handle show modal
    const handleShowModal = event => {
        event.preventDefault();
        setShowModal(!showModal);
    }

    return (
        <>
            {!bookInfo ? <></> :
                <>
                    {/* The Modal */}
                    <div id="myModal" className="modal" style={showModal ? { display: "block" } : { display: "none" }}>
                        {/* Modal content */}
                        <div className="modal-content">
                            {/* Modal Header */}
                            <div className="modal-header">
                                <span className="close" onClick={handleShowModal}>&times;</span>
                                <h2 className="book-title">{bookInfo.title}</h2>
                            </div>
                            {/* Modal Body */}
                            <div className="modal-body row">
                                <div className="col-xs-12 col-lg-4 col-xl-3">
                                    {/* Book Cover */}
                                    <img
                                        src={!bookInfo.imageLinks ? "./Images/blank-cover.png" : bookInfo.imageLinks.thumbnail}
                                        width={"100%"}
                                    />
                                </div>
                                {/* Book info */}
                                <div className="col-xs-12 col-lg-8 col-xl-9">
                                    {/* Author */}
                                    <div>
                                        <span className="modal-label">Author(s):</span>
                                        {bookInfo.authors.map((author, i) => (
                                            <span key={i} className="book-info">{author}</span>
                                        ))}
                                    </div>
                                    {/* Publisher */}
                                    <div className="modal-row">
                                        <span className="modal-label">Publisher:</span>
                                        <span className="book-info">{bookInfo.publisher}</span>
                                    </div>
                                    {/* Published Date  */}
                                    <div className="modal-row">
                                        <span className="modal-label">Date:</span>
                                        <span className="book-info">{bookInfo.publishedDate}</span>
                                    </div>
                                    {/* ISBN */}
                                    <div className="modal-row">
                                        <span className="modal-label">ISBN:</span>
                                        <span className="book-info">
                                            {!bookISBN ? <></> : bookISBN.identifier}
                                        </span>
                                    </div>
                                    {/* Description */}
                                    <div className="modal-row">
                                        <span className="modal-label">Description:</span>
                                        <div className="book-info">{!bookInfo.description ? <></> : parse(bookInfo.description)}</div>
                                    </div>
                                </div>
                            </div>
                            {/* Modal Footer */}
                            <div className="modal-footer">
                                <h3>Modal Footer</h3>
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    );
};