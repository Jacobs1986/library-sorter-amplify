import React, { useContext } from "react";

// CSS File
import "./inputModal.css";

// Import context
import { NewBookInput } from "./inputModal";

export default function AdvancedForm() {
    const { newBookInfo, setNewBookInfo } = useContext(NewBookInput);

    // Function for handling change in the form inputs
    const handleInputChange = event => {
        setNewBookInfo({
            name: event.target.name,
            value: event.target.value
        })
    }

    return (
        <div>
            <h3>Advanced</h3>
            <form>
                <div className="container inputAdvancedForm">
                    {/* Publication information */}
                    <div className="row">
                        <div className="col-4">
                            <h3>Publication</h3>
                            <div className="row">
                                {/* Edition Number */}
                                <label htmlFor="newEdition">Edition:</label>
                                <input id="newEdition" type="number" name="edition" value={ newBookInfo.edition || '' } onChange={handleInputChange} />
                            </div>
                            <div className="row">
                                {/* Printing */}
                                <label htmlFor="newPrinting">Printing:</label>
                                <input id="newPrinting" type="number" name="printing" value={ newBookInfo.printing || '' } onChange={handleInputChange}/>
                            </div>
                        </div>
                        <div className="col-4">
                            {/* Book Cover */}
                            <h3>Does the book have a dust jacket?</h3>
                            <div className="row radioRow">
                                <input type="radio" id="newDustJacketYes" name="dustJacket" value="Yes" onChange={handleInputChange} />
                                <label htmlFor="newDustJacketYes">Yes</label>
                                <input type="radio" id="newDustJacketNo" name="dustJacket" value="No" onChange={handleInputChange} />
                                <label htmlFor="newDustJacketNo">No</label>
                            </div>
                            {/* Book Cover condition */}
                            <div className="row">
                                <label htmlFor="newBookCondition">Book Condition:</label>
                                <select id="newBookCondition" name="bookCondition" value={ newBookInfo.bookCondition || "" } onChange={handleInputChange} >
                                    <option value="Excellent">Excellent</option>
                                    <option value="Very Good">Very Good</option>
                                    <option value="Good">Good</option>
                                    <option value="Fair">Fair</option>
                                    <option value="Poor">Poor</option>
                                </select>
                            </div>
                            {/* Description of cover damage */}
                            <div className="row">
                                <label htmlFor="newBookDamage">Description of damage:</label>
                                <textarea id="newBookDamage" name="bookDamage" rows="3" value={ newBookInfo.bookDamage || '' } onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className="col-4">
                            {/* Acquisition */}
                            <h3>Acquisition Information</h3>
                            {/* Acquisition Date */}
                            <div className="row">
                                <label htmlFor="newAcquisitionDate">Acquisition Date:</label>
                                <input type="date" id="newAcquisitionDate" name="acquisitionDate" value={ newBookInfo.acquisitionDate || '' } onChange={handleInputChange} />
                            </div>
                            {/* Acquired from */}
                            <div className="row">
                                <label htmlFor="newAcquiredFrom">Acquired From:</label>
                                <input type="text" id="newAcquiredFrom" name="acquiredFrom" value={ newBookInfo.acquiredFrom || '' } onChange={handleInputChange} />
                            </div>
                            {/* Cost */}
                            <div className="row">
                                <label htmlFor="newAquiredCost">Cost</label>
                                <input type="text" id="newAquiredCost" name="aquiredCost" value={ newBookInfo.aquiredCost || '' } onChange={handleInputChange} />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};