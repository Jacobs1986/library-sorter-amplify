import React, {
    useContext,
    useEffect,
    useReducer,
} from "react";

// CSS File
import "./displayBookModal.css";

// Import the context's
import { BookInfoContext } from "./displayBookModal";
import { EditBookInfoContext } from "./displayBookModal";

// import reducer function
import { reducer as editReducer } from "../../functions/reducer"

export default function EditBookInfo() {
    // Import book information
    const { bookInfo } = useContext(BookInfoContext)
    const { setEditInfo, handleSaveEdit } = useContext(EditBookInfoContext)
    // The original info that will be displayed
    const [originalInfo, setOriginalInfo] = useReducer(editReducer, {});

    // Reimport information for original info
    useEffect(() => {
        setOriginalInfo({ 
            reload: true,
            value: bookInfo 
        })
    }, [bookInfo]);

    // Handle edit change
    const handleEditInfo = event => {
        // Change the display info
        setOriginalInfo({
            name: event.target.name,
            value: event.target.value
        })
        // Save the new information to edit
        setEditInfo({
            name: event.target.name,
            value: event.target.value
        })
    }

    return (
        <>
            {!originalInfo ? <div></div> :
                <form className="displayEditForm">
                    {/* Edit title */}
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <label htmlFor="editTitle">Title</label>
                                <input id="editTitle" type="text" name="title" value={originalInfo.title || ''} onChange={handleEditInfo} />
                            </div>
                        </div>
                        <div className="row">
                            {/* Author */}
                            <div className="col-6">
                                <label htmlFor="editAuthor">Author(s)</label>
                                <input id="editAuthor" type="text" name="author" value={originalInfo.author || ''} onChange={handleEditInfo} />
                                <p style={{ margin: "0" }}>Use a comma to separate multiple authors</p>
                            </div>
                            {/* Publisher */}
                            <div className="col-6">
                                <label htmlFor="editPublisher">Publisher</label>
                                <input id="editPublisher" type="text" name="publisher" value={originalInfo.publisher || ''} onChange={handleEditInfo} />
                            </div>
                        </div>
                        <div className="row">
                            {/* ISBN */}
                            <div className="col-4">
                                <label htmlFor="editISBN">ISBN</label>
                                <input id="editISBN" type="text" name="isbn" maxLength="13" value={originalInfo.isbn || ''} onChange={handleEditInfo} />
                            </div>
                            {/* Publication Date */}
                            <div className="col-4">
                                <label htmlFor="editPubDate">Publication Date</label>
                                <input id="editPubDate" type="text" name="pubDate" value={originalInfo.pubDate || ''} onChange={handleEditInfo} />
                            </div>
                            {/* Number of pages */}
                            <div className="col-4">
                                <label htmlFor="editNumofPage">Number of Pages</label>
                                <br />
                                <input id="editNumofPage" type="number" name="numOfPages" value={originalInfo.numOfPages || ''} onChange={handleEditInfo} />
                            </div>
                        </div>
                        <div className="row">
                            {/* Book description */}
                            <div className="col-6">
                                <label htmlFor="editSynposis">Synopsis</label>
                                <textarea id="editSynposis" name="synopsis" rows="18" value={originalInfo.synopsis || ''} onChange={handleEditInfo} />
                            </div>
                            {/* Book Cover */}
                            <div className="col-6">
                                <label htmlFor="editCover">Book Cover</label>
                                <p style={{ margin: "5px 0px " }}>Place link to an image here:</p>
                                <input id="editCover" type="text" name="cover" value={originalInfo.cover || ''} onChange={handleEditInfo} />
                                <img
                                    style={!originalInfo.cover ? { display: "none" } : { display: "block" }}
                                    src={originalInfo.cover}
                                    alt="Book Cover"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <button onClick={handleSaveEdit}>Save Edit</button>
                            </div>
                        </div>
                    </div>
                </form>
            }
        </>
    );
};