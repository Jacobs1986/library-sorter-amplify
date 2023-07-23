import React from "react";

// CSS File
import "./inputModal.css";

export default function InputForm() {
    return (
        <form>
            <div className="container inputBasicForm">
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
                        <label htmlFor="newSynopsis">Synopsis</label>
                        <textarea id="newSynopsis" name="newSynopsis" rows="18" />
                    </div>
                    {/* Book Cover */}
                    <div class="col-6">
                        <label htmlFor="newCover">Book Cover</label>
                        <p style={{ margin: "5px 0px " }}>Place link to an image here:</p>
                        <input id="newCover" type="text" name="newCover" />
                        <img
                            src="https://npr.brightspotcdn.com/legacy/sites/wyso/files/201804/00162120-a0cb-0132-a2d3-0e6808eb79bf.jpg"
                            alt="Book Cover"
                        />
                    </div>
                </div>
            </div>
        </form>
    );
};