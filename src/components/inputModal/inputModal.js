import React from "react";

// CSS File
import "./inputModal.css";

// Modal styling
import "../../styling/modal.css"

export default function InputModal() {
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <span className="close">&times;</span>
                    <h2>Input Book Information</h2>
                </div>
                <div className="modal-body">
                    <h3>Use the fields below to enter book information</h3>
                    <form>
                        <div className="container inputNewBookModal">
                            {/* Input for Title */}
                            <div className="row">
                                <div className="col-12">
                                    <label htmlFor="newTitle">Title</label>
                                    <input id="newTitle" type="text" name="newTitle" />
                                </div>
                            </div>
                            <div className="row">
                                {/* Author */}
                                <div className="col-6">
                                    <label htmlFor="newAuthor">Author(s)</label>
                                    <input id="newAuthor" type="text" name="newAuthor" />
                                    <p style={{ margin: "0" }}>Use a comma to separate multiple authors</p>
                                </div>
                                {/* Publisher */}
                                <div className="col-6">
                                    <label htmlFor="newPublisher">Publisher</label>
                                    <input id="newPublisher" type="text" name="newPublisher" />
                                </div>
                            </div>
                            <div className="row">
                                {/* ISBN */}
                                <div className="col-4">
                                    <label htmlFor="newISBN">ISBN</label>
                                    <input id="newISBN" type="text" name="newISBN" />
                                </div>
                                {/* Publication Date */}
                                <div className="col-4">
                                    <label htmlFor="newPubDate">Publication Date</label>
                                    <input id="newPubDate" type="text" name="newPubDate" />
                                </div>
                                {/* Number of pages */}
                                <div className="col-4">
                                    <label htmlFor="newNumofPage">Number of Pages</label>
                                    <br />
                                    <input id="newNumofPage" type="number" name="newNumofPage" />
                                </div>
                            </div>
                            <div className="row">
                                {/* Book description */}
                                <div class="col-6">
                                    <label htmlFor="newDescription">Book Description</label>
                                    <textarea id="newDescription" name="newDescription" />
                                </div>
                                {/* Book Cover */}
                                <div class="col-6">
                                    <label htmlFor="newCover">Book Cover</label>
                                    <input id="newCover" type="text" name="newCover" />
                                    <img 
                                        src="http://books.google.com/books/content?id=ron8mWul2EcC&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE72PU-Z4p6_ufnN3fdJFcMYlow3Z5pT6lY-Lg3F8gVCZ8sFHrQDk453-5qRhLj3jC_gcr1ATEqdoxHXYj0eFyxrdaXzmnKgc4Lfd7mAMAUwHMXZv0aWsm8txmlFRrlehy1W0UudU&source=gbs_api"
                                        alt="Book Cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};