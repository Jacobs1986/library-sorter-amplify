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

// Import book refiner function
import bookInfoRefiner from "./bookInfoRefiner";

export default function DisplayModal() {
    // set googleBookId hook
    const { googleBookId } = useContext(GoogleBookId);
    // show modal hook
    const [showModal, setShowModal] = useState("none");
    // hook for bookInfo
    const [bookInfo, setBookInfo] = useState();
    // Set the volumeInfo
    const [volumeInfo, setVolumeInfo] = useState()

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
            console.log(bookInfoRefiner(bookInfo))
            setVolumeInfo(bookInfoRefiner(bookInfo));
            setShowModal("block");
        }
    }, [bookInfo])

    // Close the modal
    const handleCloseModal = () => {
        setShowModal("none");
        setVolumeInfo('');
    }

    return (
        <>
            {!volumeInfo ? <div></div> :
                <div className="modal" style={{ display: `${showModal}` }}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <span className="close" onClick={handleCloseModal}>&times;</span>
                            <h2>{volumeInfo.title}</h2>
                        </div>
                        <div className="modal-body container">
                            <div className="row">
                                <div className="col-6">
                                    <img
                                        src={volumeInfo.image}
                                        alt="Book cover"
                                        style={{ width: "100%" }}
                                    />
                                </div>
                                <div className="col-6 bookInfo">
                                    <p><span className="modalInlineLabel" style={{ fontWeight: "bold" }}>Author</span>: {volumeInfo.author}</p>
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