import React, {
    useContext,
    useState
} from "react";

// CSS File
import "./addBookModal-styles.css";

// Import context
import { NewInfoContext } from "./addBookModal";

export default function CollectorForm() {
    // NewInfoContext values
    const { collectorInfo, setCollectorInfo } = useContext(NewInfoContext);
    // showCollectorForm value
    const [showCollectorForm, setShowCollectorForm] = useState(false);

    // Function for toggling showCollectorForm
    const handleToggleShowForm = () => {
        // Toggle showCollectorForm
        setShowCollectorForm(!showCollectorForm);
        // Set the information into collectorInfo
        setCollectorInfo({
            type: 'add',
            name: 'collectorInfo',
            value: !showCollectorForm
        })
    }

    // Function for saving the information
    const handleInput = event => {
        setCollectorInfo({
            type: 'add',
            name: event.target.name,
            value: event.target.value
        })
    }

    return (
        <div>
            {/* Add Collector Info button */}
            <div className="row">
                <div className="button" onClick={handleToggleShowForm}>Add Collector Info</div>
            </div>
            {/* Collector form */}
            <div className="row" style={!showCollectorForm ? { display: "none" } : { display: "block" }}>
                <div className="col-xs-12 col-s-6">
                    <div className="row">
                        {/* Aquired From */}
                        <div className="col-xs-12 col-s-12 col-m-12 col-lg-5 col-xl-4 modal-label">
                            Acquired From:
                        </div>
                        <div className="col-xs-12 col-s-12 col-m-12 col-lg-7 col-xl-8">
                            <input className="modal-input" type="text" name="acquiredFrom" value={collectorInfo.acquiredFrom} onChange={handleInput} />
                        </div>
                        {/* Acquisition Date */}
                        <div className="col-xs-12 col-s-12 col-m-12 col-lg-5 col-xl-4 modal-label">
                            Acquisition Date:
                        </div>
                        <div className="col-xs-12 col-s-12 col-m-12 col-lg-7 col-xl-8">
                            <input className="modal-input" type="date" style={{ width: "10em" }} name="acquisitionDate" value={collectorInfo.acquisitionDate} onChange={handleInput} />
                        </div>
                        {/* Aquisition Cost */}
                        <div className="col-xs-12 col-s-12 col-m-12 col-lg-5 col-xl-4 modal-label">
                            Acquisition Cost:
                        </div>
                        <div className="col-xs-12 col-s-12 col-m-12 col-lg-7 col-xl-8">
                            <input className="modal-input" type="text" style={{ width: "7em" }} name="acquisitionCost" value={collectorInfo.acquisitionCost} onChange={handleInput} />
                        </div>
                        {/* Edition */}
                        <div className="col-xs-12 col-s-12 col-m-12 col-lg-5 col-xl-4 modal-label">
                            Edition:
                        </div>
                        <div className="col-xs-12 col-s-12 col-m-12 col-lg-7 col-xl-8">
                            <input className="modal-input" type="text" style={{ width: "4em" }} name="edition" value={collectorInfo.edition} onChange={handleInput} />
                        </div>
                        {/* Printing */}
                        <div className="col-xs-12 col-s-12 col-m-12 col-lg-5 col-xl-4 modal-label">
                            Printing:
                        </div>
                        <div className="col-xs-12 col-s-12 col-m-12 col-lg-7 col-xl-8">
                            <input className="modal-input" type="text" style={{ width: "4em" }} name="printing" value={collectorInfo.printing} onChange={handleInput} />
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-s-6">
                    {/* Condition */}
                    <div className="col-xs-12 col-s-12 col-m-12 col-lg-5 col-xl-4 modal-label">
                        Condition:
                    </div>
                    <div className="col-xs-12 col-s-12 col-m-12 col-lg-7 col-xl-8">
                        <select className="modal-input modal-select" name="condition" value={collectorInfo.condition} onChange={handleInput}>
                            <option value="">---</option>
                            <option value="Poor">Poor</option>
                            <option value="Fair">Fair</option>
                            <option value="Good">Good</option>
                            <option value="Very Good">Very Good</option>
                            <option value="Excellent">Excellent</option>
                        </select>
                    </div>
                    {/* Dust Jacket radios */}
                    <div className="col-xs-12 col-s-12 col-m-12 col-lg-12 col-xl-12 modal-label">
                        Did this book come with a dust jacket?
                    </div>
                    <div className="col-xs-12 col-s-12 col-m-12 col-lg-12 col-xl-12">
                        {/* Dust jacket yes */}
                        <input
                            type="radio"
                            name="dustJacket"
                            value="Yes"
                            onChange={handleInput}
                        /> Yes
                        {/* Dust jacket no */}
                        <input
                            type="radio"
                            name="dustJacket"
                            value="No"
                            onChange={handleInput}
                        /> No
                    </div>
                    {/* Dust Jacket Condition */}
                    <div className="col-xs-12 col-s-12 col-m-12 col-lg-5 col-xl-4 modal-label">
                        Jacket Condition:
                    </div>
                    <div className="col-xs-12 col-s-12 col-m-12 col-lg-7 col-xl-8">
                        <select className="modal-input modal-select" name="jacketCondition" value={collectorInfo.jacketCondition} onChange={handleInput}>
                            <option value="">---</option>
                            <option value="Poor">Poor</option>
                            <option value="Fair">Fair</option>
                            <option value="Good">Good</option>
                            <option value="Very Good">Very Good</option>
                            <option value="Excellent">Excellent</option>
                        </select>
                    </div>
                    {/* Additional Notes */}
                    <div className="col-xs-12 col-s-12 modal-label">
                        Additional Notes:
                    </div>
                    <div className="col-xs-12 col-s-12">
                        <textarea className="modal-input collector-textarea" name="additionalNotes" value={collectorInfo.additionalNotes} onChange={handleInput} />
                    </div>
                </div>
            </div>
        </div>
    );
};