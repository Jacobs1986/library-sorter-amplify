import React from "react";

// CSS File
import "./inputModal.css";

export default function AdvancedForm() {
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
                                <input id="newEdition" type="number" name="newEdition" />
                            </div>
                            <div className="row">
                                {/* Printing */}
                                <label htmlFor="newPrinting">Printing:</label>
                                <input id="newPrinting" type="number" name="newPrinting" />
                            </div>
                        </div>
                        <div className="col-4">
                            {/* Book Cover */}
                            <h3>Does the book have a dust jacket?</h3>
                            <div className="row radioRow">
                                <input type="radio" id="newDustJacketYes" name="bookCoverQuestion" value="Yes" />
                                <label htmlFor="newDustJacketYes">Yes</label>
                                <input type="radio" id="newDustJacketNo" name="bookCoverQuestion" value="No" />
                                <label htmlFor="newDustJacketNo">No</label>
                            </div>
                            {/* Book Cover condition */}
                            <div className="row">
                                <label htmlFor="newBookCondition">Book Condition:</label>
                                <select id="newBookCondition" name="newBookCondition">
                                    <option value="excellent">Excellent</option>
                                    <option value="veryGood">Very Good</option>
                                    <option value="good">Good</option>
                                    <option value="fair">Fair</option>
                                    <option value="poor">Poor</option>
                                </select>
                            </div>
                            {/* Description of cover damage */}
                            <div className="row">
                                <label htmlFor="newBookDamage">Description of damage:</label>
                                <textarea id="newBookDamage" name="newBookDamage" rows="3" />
                            </div>
                        </div>
                        <div className="col-4">
                            {/* Acquisition */}
                            <h3>Acquisition Information</h3>
                            {/* Acquired from */}
                            <div className="row">
                                <label htmlFor="newAcquiredFrom">Acquired From:</label>
                                <input type="text" id="newAcquiredFrom" name="newAcquiredFrom" />
                            </div>
                            {/* Cost */}
                            <div className="row">
                                <label htmlFor="newAquiredCost">Cost</label>
                                <input type="text" id="newAquiredCost" name="newAquiredCost" />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};