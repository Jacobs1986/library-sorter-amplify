import React, { useContext, useEffect } from "react";

// Inport context
import { CollectorInfoInput } from "./searchModal";

export default function CollectorInfo() {
    // Set reducers
    const { inputCollectorInfo, setInputCollectorInfo, collectorInfoCheck, setCollectorInfoCheck, selectedRadio, setSelectedRadio } = useContext(CollectorInfoInput)

    useEffect(() => {
        setInputCollectorInfo({
            name: "collectorInfo",
            value: collectorInfoCheck
        })
    }, [collectorInfoCheck, setInputCollectorInfo])

    // Toggle checked state
    const handleToggleCheckedState = () => {
        // event.preventDefault();
        setCollectorInfoCheck(!collectorInfoCheck);
    }

    // Function for handling change in the form inputs
    const handleInputChange = event => {
        setInputCollectorInfo({
            name: event.target.name,
            value: event.target.value
        })
    }

    // Handle radio selection
    const handleRadioSelect = (event) => {
        setSelectedRadio(event.target.value)
        setInputCollectorInfo({
            name: event.target.name,
            value: event.target.value
        })
    }

    return (
        <div>
            <div className="container inputAdvancedForm">
                <div className="row">
                    <div className="col-12">
                        <input type="checkbox" name="collectorInfo" checked={collectorInfoCheck} onChange={handleToggleCheckedState} /><label>Click here to input collector information</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <h3>Publication</h3>
                        <div className="row">
                            {/* Edition Number */}
                            <label htmlFor="newEdition">Edition:</label>
                            <input id="newEdition" type="number" name="edition" value={inputCollectorInfo.edition || ''} onChange={handleInputChange} />
                        </div>
                        <div className="row">
                            {/* Printing */}
                            <label htmlFor="newPrinting">Printing:</label>
                            <input id="newPrinting" type="number" name="printing" value={inputCollectorInfo.printing || ''} onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className="col-4">
                        {/* Book Cover */}
                        <h3>Does the book have a dust jacket?</h3>
                        <div className="row radioRow">
                            <input
                                type="radio"
                                id="newDustJacketYes"
                                name="dustJacket"
                                value="Yes"
                                checked={selectedRadio === 'Yes'}
                                onChange={handleRadioSelect} />
                            <label htmlFor="newDustJacketYes">Yes</label>
                            <input
                                type="radio"
                                id="newDustJacketNo"
                                name="dustJacket"
                                value="No"
                                checked={selectedRadio === 'No'}
                                onChange={handleRadioSelect} />
                            <label htmlFor="newDustJacketNo">No</label>
                        </div>
                        {/* Book Cover condition */}
                        <div className="row">
                            <label htmlFor="newBookCondition">Book Condition:</label>
                            <select id="newBookCondition" name="bookCondition" value={inputCollectorInfo.bookCondition || ""} onChange={handleInputChange} >
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
                            <textarea id="newBookDamage" name="bookDamage" rows="3" value={inputCollectorInfo.bookDamage || ''} onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className="col-4">
                        {/* Acquisition */}
                        <h3>Acquisition Information</h3>
                        {/* Acquisition Date */}
                        <div className="row">
                            <label htmlFor="newAcquisitionDate">Acquisition Date:</label>
                            <input type="date" id="newAcquisitionDate" name="acquisitionDate" value={inputCollectorInfo.acquisitionDate || ''} onChange={handleInputChange} />
                        </div>
                        {/* Acquired from */}
                        <div className="row">
                            <label htmlFor="newAcquiredFrom">Acquired From:</label>
                            <input type="text" id="newAcquiredFrom" name="acquiredFrom" value={inputCollectorInfo.acquiredFrom || ''} onChange={handleInputChange} />
                        </div>
                        {/* Cost */}
                        <div className="row">
                            <label htmlFor="newAquiredCost">Cost</label>
                            <input type="text" id="newAquiredCost" name="aquiredCost" value={inputCollectorInfo.aquiredCost || ''} onChange={handleInputChange} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};