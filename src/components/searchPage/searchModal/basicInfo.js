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
                    <div className="row">
                        <div className="col-xs-12 col-s-4 col-m-4 col-lg-4 col-xl-3 modal-label">
                            Author(s):
                        </div>
                        <div className="col-xs-12 col-s-8 col-m-8 col-lg-8 col-xl-9">
                            {googleInfo.authors.map((author, i) => (<span key={i}>{author} </span>))}
                        </div>
                    </div>
                    {/* ISBN */}
                    <div className="row">
                        <div className="col-xs-12 col-s-4 col-m-4 col-lg-4 col-xl-3 modal-label">
                            ISBN:
                        </div>
                        <div className="col-xs-12 col-s-8 col-m-8 col-lg-8 col-xl-9">
                            {!googleISBN ? "NA" : googleISBN.identifier}
                        </div>
                    </div>
                    {/* Publsiher */}
                    <div className="row">
                        <div className="col-xs-12 col-s-4 col-m-4 col-lg-4 col-xl-3 modal-label">
                            Publisher:
                        </div>
                        <div className="col-xs-12 col-s-8 col-m-8 col-lg-8 col-xl-9">
                            {googleInfo.publisher}
                        </div>
                    </div>
                    {/* Publication Date */}
                    <div className="row">
                        <div className="col-xs-12 col-s-4 col-m-4 col-lg-4 col-xl-3 modal-label">
                            Publication Date:
                        </div>
                        <div className="col-xs-12 col-s-8 col-m-8 col-lg-8 col-xl-9">
                            {googleInfo.publishedDate}
                        </div>
                    </div>
                    {/* Description */}
                    <div className="row">
                        <div className="col-xs-12 modal-label">
                            Description:
                        </div>
                        <div className="col-xs-12">
                            {!googleInfo.description ? "NA" : parse(googleInfo.description)}
                        </div>
                    </div>
                    {/* Add library select */}
                </div>
            </div>
        </>
    );
};