import React, {
    useState,
    useContext,
    useEffect
} from "react";

// CSS File
import "./searchModal.css";

// Import GoogleBookId
import { GoogleBookId } from "../../pages/search-page";

// Import axios
import axios from "axios";

export default function DisplayModal() {
    // set googleBookId hook
    const { googleBookId } = useContext(GoogleBookId);
    // show modal hook
    const [showModal, setShowModal] = useState("none");
    // hook for volumeInfo
    const [bookInfo, setBookInfo] = useState();

    // Create the function for opening the modal
    // const handleOpenModal = () => {
    //     setShowModal("block");
    // }
    // Run when googleBookId changes
    useEffect(() => {
        if (googleBookId) {
            axios.get(`https://www.googleapis.com/books/v1/volumes/${googleBookId}`).then((res) => {
                console.log(googleBookId);
                setBookInfo(res.data);
            })
        }
    }, [googleBookId])

    // Display modal with all of the content
    useEffect(() => {
        if (bookInfo) {
            setShowModal("block");
            console.log(bookInfo.volumeInfo.imageLinks.large)
        }
    }, [bookInfo])

    // Close the modal
    const handleCloseModal = () => {
        setShowModal("none");
        setBookInfo('');
    }

    return (
        <>
            {!bookInfo ? <div></div> :
                <div className="modal" style={{ display: `${showModal}` }}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <span className="close" onClick={handleCloseModal}>&times;</span>
                            <h2>{bookInfo.volumeInfo.title}</h2>
                        </div>
                        <div className="modal-body container">
                            <div className="row">
                                <div className="col-6">
                                    <img
                                        src={!bookInfo.volumeInfo.imageLinks ? "./Images/blank-cover.png" : bookInfo.volumeInfo.imageLinks.thumbnail }
                                        alt="Book cover"
                                        style={{ width: "100%" }}
                                    />
                                </div>
                                <div className="col-6 bookInfo">
                                    <p><span className="modalInlineLabel" style={{ fontWeight: "bold" }}>Author</span>: {bookInfo.volumeInfo.authors[0]}</p>
                                    <p><span className="modalInlineLabel" style={{ fontWeight: "bold" }}>Publisher</span>: {bookInfo.volumeInfo.publisher}</p>
                                    <p><span className="modalInlineLabel" style={{ fontWeight: "bold" }}>Publication Date:</span>: {bookInfo.volumeInfo.publishedDate}</p>
                                    <p><span className="modalInlineLabel" style={{ fontWeight: "bold" }}>ISBN</span>: {!bookInfo.volumeInfo.industryIdentifiers ? <span></span> : <span>ISBN goes here</span>}</p>
                                    <p><span className="modalInlineLabel" style={{ fontWeight: "bold" }}>Page Count</span>: {bookInfo.volumeInfo.pageCount}</p>
                                    <p><span className="modalInlineLabel" style={{ fontWeight: "bold" }}>Description</span>:</p>
                                    <p id="descriptionParagraph">
                                    {bookInfo.volumeInfo.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>

    );
};