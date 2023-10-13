import React, {
    useEffect, 
    useState,
    useContext
} from "react";

// CSS File
import "./searchModal-styles.css";

// Import contexts
import { DataBaseInfo } from "./searchModal";

export default function CollectorForm() {
    // DataBaseInfo values
    const { collectorInfo, setCollectorInfo } = useContext(DataBaseInfo);

    // function to show the collector form
    const handleShowForm = () => {
        // Toggle the value
        setCollectorInfo({
            type: 'add',
            name: 'collectorInfo',
            value: !collectorInfo.collectorInfo
        })
    }

    // Function for inputing the collector data
    const handleCollectorDataInput = event => {
        setCollectorInfo({
            type: 'add',
            name: event.target.name,
            value: event.target.value
        })
    }

    return (
        <>
            {/* Form Button */}
            <div className="row">
                <div className="col-xs-12 col-s-12 col-m-12 col-lg-12 col-xl-12">
                    <div className="button collectorBtn" onClick={handleShowForm}>Add Collector Info</div>
                </div>
            </div>
            {/* Collector Form */}
            <div className="row">
                <div className="collectorForm" style={!collectorInfo.collectorInfo ? { height: "0" } : { height: "100%" }}>
                    <div className="col-xs-12 col-s-12 col-lg-6 col-xl-6">
                        {/* Acquisition Date */}
                        <div className="row">
                            <div className="col-xs-12 col-s-5 col-m-4 col-lg-5 col-xl-4">
                                <label className="boldLabel" htmlFor="acquiredDate">Acquisition Date:</label>
                            </div>
                            <div className="col-xs-12 col-s-4 col-m-4 col-lg-5 col-xl-4">
                                <input type="date" id="acquiredDate" className="collectorInput" name="acquisitionDate" value={collectorInfo.acquisitionDate} onChange={handleCollectorDataInput} />
                            </div>
                        </div>
                        {/* Acquired From */}
                        <div className="row">
                            <div className="col-xs-12 col-s-5 col-m-4 col-lg-5 col-xl-4">
                                <label className="boldLabel" htmlFor="acquiredFrom">Aquired From:</label>
                            </div>
                            <div className="col-xs-12 col-s-7 col-m-4 col-lg-7 col-xl-8">
                                <input type="text" id="acquiredFrom" className="collectorInput" name="acquiredFrom" value={collectorInfo.acquiredFrom} onChange={handleCollectorDataInput} />
                            </div>
                        </div>
                        {/* Acquisition Cost */}
                        <div className="row">
                            <div className="col-xs-12 col-s-5 col-m-4 col-lg-5 col-xl-4">
                                <label className="boldLabel" htmlFor="acquisitionCost">Acquisition Cost:</label>
                            </div>
                            <div className="col-xs-6 col-s-3 col-m-2 col-lg-3 col-xl-3">
                                <input type="text" id="acquisitionCost" className="collectorInput" name="acquisitionCost" value={collectorInfo.acquisitionCost} onChange={handleCollectorDataInput} />
                            </div>
                        </div>
                        {/* Edition */}
                        <div className="row">
                            <div className="col-xs-4 col-s-5 col-m-4 col-lg-5 col-xl-4">
                                <label className="boldLabel" htmlFor="edition">Edition:</label>
                            </div>
                            <div className="col-xs-5 col-s-3 col-m-2 col-lg-2 col-xl-2">
                                <input type="text" id="edition" className="collectorInput" name="edition" value={collectorInfo.edition} onChange={handleCollectorDataInput} />
                            </div>
                        </div>
                        {/* Printing */}
                        <div className="row">
                            <div className="col-xs-4 col-s-5 col-m-4 col-lg-5 col-xl-4">
                                <label className="boldLabel" htmlFor="printing">Printing:</label>
                            </div>
                            <div className="col-xs-5 col-s-3 col-m-2 col-lg-2 col-xl-2">
                                <input type="text" id="printing" className="collectorInput" name="printing" value={collectorInfo.printing} onChange={handleCollectorDataInput} />
                            </div>
                        </div>
                    </div>
                    {/* Second Column */}
                    <div className="col-xs-12 col-s-12 col-lg-6 col-xl-6">
                        {/* Condition */}
                        <div className="row">
                            <div className="col-xs-5 col-s-5 col-m-4 col-lg-5 col-xl-4">
                                <label className="boldLabel" htmlFor="condition">Condition:</label>
                            </div>
                            <div className="col-xs-7 col-s-4 col-m-3 col-lg-5 col-xl-4">
                                <select id="condition" style={{ width: "100%", padding: "3px" }} name="condition" value={collectorInfo.condition} onChange={handleCollectorDataInput} >
                                    <option value="">---</option>
                                    <option value="Poor">Poor</option>
                                    <option value="Fair">Fair</option>
                                    <option value="Good">Good</option>
                                    <option value="Very Good">Very Good</option>
                                    <option value="Excellent">Excellent</option>
                                </select>
                            </div>
                        </div>
                        {/* Dust Jacket */}
                        <div className="row">
                            <div className="col-xs-12 col-s-5 col-m-4 col-lg-5 col-xl-4">
                                <label className="boldLabel" htmlFor="dustjacketradios">Did the book come with a dust jacket?</label>
                            </div>
                            <div className="col-xs-12 col-s-5 col-m-4 col-lg-4 col-xl-4">
                                {/* Dust jacket yes */}
                                <input
                                    type="radio"
                                    name="dustJacket"
                                    value="Yes"
                                    onChange={handleCollectorDataInput}
                                /> Yes
                                {/* Dust jacket no */}
                                <input
                                    type="radio"
                                    name="dustJacket"
                                    value="No"
                                    onChange={handleCollectorDataInput}
                                /> No
                            </div>
                        </div>
                        {/* Dust jacket condition */}
                        <div className="row">
                            <div className="col-xs-12 col-s-5 col-m-4 col-lg-5 col-xl-4">
                                <label className="boldLabel" htmlFor="dustJacketCondition">Dust jacket condition:</label>
                            </div>
                            <div className="col-xs-12 col-s-5 col-m-4 col-lg-5 col-xl-4">
                                <select id="dustJacketCondition" style={{ width: "100%", padding: "3px" }} name="jacketCondition" value={collectorInfo.jacketCondition} onChange={handleCollectorDataInput} >
                                    <option value="">---</option>
                                    <option value="Poor">Poor</option>
                                    <option value="Fair">Fair</option>
                                    <option value="Good">Good</option>
                                    <option value="Very Good">Very Good</option>
                                    <option value="Excellent">Excellent</option>
                                </select>
                            </div>
                        </div>
                        {/* Additional notes */}
                        <div className="row">
                            <div className="col-xs-12 col-s-5 col-m-4 col-lg-5 col-xl-4">
                                <label className="boldLabel" htmlFor="addtionalNotes">Additional Notes:</label>
                            </div>
                            <div className="col-xs-12 col-s-7 col-m-8 col-lg-7 col-xl-8">
                                <textarea id="addtionalNotes" name="additionalNotes" value={collectorInfo.additionalNotes} onChange={handleCollectorDataInput} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};