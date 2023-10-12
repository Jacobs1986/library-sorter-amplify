import React, {
    useContext
} from "react";
import parse from "html-react-parser";

// CSS File
import "./searchModal-styles.css";

// Import context
import { BookInfo } from "./searchModal";

export default function BasicInfo() {
    // BookInfo values
    const { googleInfo, googleISBN } = useContext(BookInfo);

    return (
        <>
            {/* Book Information */}
            <div className="row">
                <div className="col-xs-12 col-s-4 col-m-5 col-lg-4 col-xl-3">
                    {/* Book Cover */}
                    <img
                        src={!googleInfo.imageLinks ? "./Images/blank-cover.png" : googleInfo.imageLinks.thumbnail}
                        alt="The image of the book cover will display here."
                        width={"100%"}
                    />
                </div>
                <div className="col-xs-12 col-s-8 col-m-7 col-lg-8 col-xl-9">
                    {/* Author list */}
                    <div>
                        <span className="modal-label">Author(s):</span>
                        <span className="book-info">
                            {googleInfo.authors.map((author, i) => (<span key={i}>{author} </span>))}
                        </span>
                    </div>
                    {/* ISBN */}
                    <div className="modal-row">
                        <span className="modal-label">ISBN:</span>
                        <span className="book-info">{!googleISBN ? "NA" : googleISBN.identifier}</span>
                    </div>
                    {/* Publsiher */}
                    <div className="modal-row">
                        <span className="modal-label">Publisher:</span>
                        <span className="book-info">{googleInfo.publisher}</span>
                    </div>
                    {/* Publication Date */}
                    <div className="modal-row">
                        <span className="modal-label">Publication Date:</span>
                        <span className="book-info">{googleInfo.publishedDate}</span>
                    </div>
                    {/* Description */}
                    <div className="modal-row">
                        <div className="modal-label">Description:</div>
                        <div className="book-info">
                            {!googleInfo.description ? "NA" : parse(googleInfo.description)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};