import React, { useContext } from "react";

// Import context
import { SearchModalContext } from "./modalver2";

export default function BookInfo() {
    // set volume info
    const { volumeInfo } = useContext(SearchModalContext);

    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    {/* Display the image */}
                    <img
                        src={volumeInfo.cover}
                        alt="Book cover"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="col-6 bookInfo">
                    <p><span className="modalInlineLabel" style={{ fontWeight: "bold" }}>Author</span>: {volumeInfo.author}</p>
                    <p><span className="modalInlineLabel" style={{ fontWeight: "bold" }}>Publisher</span>: {volumeInfo.publisher}</p>
                    <p><span className="modalInlineLabel" style={{ fontWeight: "bold" }}>Publication Date:</span>: {volumeInfo.publishDate}</p>
                    <p><span className="modalInlineLabel" style={{ fontWeight: "bold" }}>ISBN</span>: {volumeInfo.isbn.identifier}</p>
                    <p><span className="modalInlineLabel" style={{ fontWeight: "bold" }}>Page Count</span>: {volumeInfo.pageCount}</p>
                    <p><span className="modalInlineLabel" style={{ fontWeight: "bold" }}>Description</span>:</p>
                    <p id="descriptionParagraph">
                        {volumeInfo.description}
                    </p>
                </div>
            </div>
        </div>
    );
};