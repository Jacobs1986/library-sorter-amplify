import React, { useContext, useEffect, useState } from "react";

// CSS File
import "./inputModal.css";

// Import context
import { NewBookInput } from "./inputModal";

export default function InputForm() {
    const { newBookInfo, setNewBookInfo, missingInfoAlert } = useContext(NewBookInput);
    // Title class toggle
    const [missingTitle, setMissingTitle] = useState(false)

    useEffect(() => {
        if (missingInfoAlert) {
            setMissingTitle(true)
        } else {
            setMissingTitle(false);
        }
    }, [missingInfoAlert])

    // Function for handling change in the form inputs
    const handleInputChange = event => {
        setNewBookInfo({
            name: event.target.name,
            value: event.target.value
        })
    }

    return (
        <form>
            <div className="container inputBasicForm">
                {/* Input for Title */}
                <div className="row">
                    <div className="col-12">
                        <label htmlFor="newTitle">Title</label>
                        <input id="newTitle" type="text" name="title" value={newBookInfo.title || ''} onChange={handleInputChange} className={missingTitle ? "warningInputText" : null} />
                    </div>
                </div>
                <div className="row">
                    {/* Author */}
                    <div className="col-6">
                        <label htmlFor="newAuthor">Author(s)</label>
                        <input id="newAuthor" type="text" name="author" value={newBookInfo.author || ''} onChange={handleInputChange} />
                        <p style={{ margin: "0" }}>Use a comma to separate multiple authors</p>
                    </div>
                    {/* Publisher */}
                    <div className="col-6">
                        <label htmlFor="newPublisher">Publisher</label>
                        <input id="newPublisher" type="text" name="publisher" value={newBookInfo.publisher || ''} onChange={handleInputChange}/>
                    </div>
                </div>
                <div className="row">
                    {/* ISBN */}
                    <div className="col-4">
                        <label htmlFor="newISBN">ISBN</label>
                        <input id="newISBN" type="text" name="isbn" maxLength="13" value={newBookInfo.isbn || ''} onChange={handleInputChange}/>
                    </div>
                    {/* Publication Date */}
                    <div className="col-4">
                        <label htmlFor="newPubDate">Publication Date</label>
                        <input id="newPubDate" type="text" name="pubDate" value={newBookInfo.pubDate || ''} onChange={handleInputChange}/>
                    </div>
                    {/* Number of pages */}
                    <div className="col-4">
                        <label htmlFor="newNumofPage">Number of Pages</label>
                        <br />
                        <input id="newNumofPage" type="number" name="numOfPages" value={newBookInfo.numOfPages || ''} onChange={handleInputChange}/>
                    </div>
                </div>
                <div className="row">
                    {/* Book description */}
                    <div className="col-6">
                        <label htmlFor="newSynopsis">Synopsis</label>
                        <textarea id="newSynopsis" name="synopsis" rows="18" value={newBookInfo.synopsis || ''} onChange={handleInputChange} />
                    </div>
                    {/* Book Cover */}
                    <div className="col-6">
                        <label htmlFor="newCover">Book Cover</label>
                        <p style={{ margin: "5px 0px " }}>Place link to an image here:</p>
                        <input id="newCover" type="text" name="cover" value={newBookInfo.cover || ''} onChange={handleInputChange} />
                        <img
                            style={!newBookInfo.cover ? {display: "none"} : {display: "block"}}
                            src={newBookInfo.cover}
                            alt="Book Cover"
                        />
                    </div>
                </div>
            </div>
        </form>
    );
};