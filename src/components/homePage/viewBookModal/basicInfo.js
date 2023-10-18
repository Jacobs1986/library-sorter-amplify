import React, {
    useContext
} from "react";

// Import parse
import parse from "html-react-parser";

// CSS File
import "./viewBookModal-styles.css";

// Import context
import { BookData } from "./viewBookModal";

export default function BasicInfo() {
    // BookData values
    const { bookData } = useContext(BookData)

    return (
        <div className="row">
            {/* Cover */}
            <div className="col-xs-12 col-s-4 col-m-5 col-lg-5 col-xl-3">
                <img 
                    src={bookData.cover}
                    alt={`Cover image for ${bookData.title}`}
                    width={"100%"}
                />
            </div>
            {/* Book information */}
            <div className="col-xs-12 col-s-8 col-m-7 col-lg-7 col-xl-9">
                {/* Author(s) */}
                <div className="col-xs-12 col-s-4 col-m-4 col-lg-4 col-xl-3 modal-label">
                    Author(s):
                </div>
                <div className="col-xs-12 col-s-8 col-m-8 col-lg-8 col-xl-9">
                    {bookData.author.map((name, i) => <span key={i}>{name}</span>)}
                </div>
                {/* ISBN */}
                <div className="col-xs-12 col-s-4 col-m-4 col-lg-4 col-xl-3 modal-label">
                    ISBN:
                </div>
                <div className="col-xs-12 col-s-8 col-m-8 col-lg-8 col-xl-9">
                    {bookData.isbn}
                </div>
                {/* Publisher */}
                <div className="col-xs-12 col-s-4 col-m-4 col-lg-4 col-xl-3 modal-label">
                    Publisher:
                </div>
                <div className="col-xs-12 col-s-8 col-m-8 col-lg-8 col-xl-9">
                    {bookData.publisher}
                </div>
                {/* Publication Date */}
                <div className="col-xs-12 col-s-4 col-m-4 col-lg-4 col-xl-3 modal-label">
                    Publication Date:
                </div>
                <div className="col-xs-12 col-s-8 col-m-8 col-lg-8 col-xl-9">
                    {bookData.pubDate}
                </div>
                {/* Description */}
                <div className="col-xs-12 col-s-12 modal-label">
                    Description:
                </div>
                <div className="col-xs-12 col-s-12">
                    {parse(bookData.description)}
                </div>
            </div>
        </div>
    );
};