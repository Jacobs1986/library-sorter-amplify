import React, {
    useContext
} from "react";
import parse from 'html-react-parser';

// CSS File
import "./displayBookModal.css";

// Import context
import { BookInfoContext } from "./displayBookModal";

export default function BasicBookInfo() {
    // Get values from context
    const { bookInfo } = useContext(BookInfoContext)

    return (
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
    );
};