import React, {
    useContext
} from "react";

// CSS File
import "./displayBookModal.css";

// Import context
import { BookInfoContext } from "./displayBookModal";

export default function CollectorInfo() {
    const { bookInfo } = useContext(BookInfoContext)

    return (
        <>
            {bookInfo.collectorInfo ?
                <div className="container displayCollectorInfo">
                    <h3>Collector Information</h3>
                    <div className="row">
                        <div className="col-2">
                            <p><span className="collectorInfoDisplayLabel">Edition</span>: {bookInfo.edition}</p>
                            <p><span className="collectorInfoDisplayLabel">Printing</span>: {bookInfo.printing}</p>
                        </div>
                        <div className="col-4">
                            <p><span className="collectorInfoDisplayLabel">Does the book have a dust jacket?</span> {bookInfo.dustJacket}</p>
                            <p><span className="collectorInfoDisplayLabel">Book Condition</span>: {bookInfo.bookCondition}</p>
                            <p><span className="collectorInfoDisplayLabel">Description of damage</span>: {bookInfo.bookDamage}</p>
                        </div>
                        <div className="col-4">
                            <p><span className="collectorInfoDisplayLabel">Acquisition Date</span>: {bookInfo.acquisitionDate}</p>
                            <p><span className="collectorInfoDisplayLabel">Acquired From</span>: {bookInfo.acquiredFrom}</p>
                            <p><span className="collectorInfoDisplayLabel">Cost</span>: {bookInfo.aquiredCost}</p>
                        </div>
                    </div>
                </div> :
                <div></div>
            }
        </>

    );
};