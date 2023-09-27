import React from "react";

// CSS File
import "./homePage-styles.css";

export default function ViewerRadios() {
    return (
        <div className="row">
            <div className="col-xs-12 radioDiv">
                <span>Toggle Library View:</span>
                {/* Radio for the accordion view */}
                <label>
                    <input
                        type="radio"
                        name="library-display"
                        value="Accordion"
                    /> Accordion
                </label>
                {/* Radio for the table view */}
                <label>
                    <input
                        type="radio"
                        name="library-display"
                        value="Table"
                    /> Table
                </label>
            </div>
        </div>
    );
};