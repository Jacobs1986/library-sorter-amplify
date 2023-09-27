import React, {
    useContext
} from "react";

// CSS File
import "./homePage-styles.css";

// Import context
import { LibInfo } from "../../pages/home-page";

export default function ViewerRadios() {
    // libraryView variable
    const { libraryView, setLibraryView } = useContext(LibInfo)

    // Function that will change the radios
    const handleChangeLibDisplay = event => {
        // Set radioName value
        let radioName = event.target.value;
        // Begin switch statement
        switch (radioName) {
            // If radioName === "Table"
            case "Table":
                // set libraryView to Table
                setLibraryView("Table");
                break
            // default is Accordion
            default:
                setLibraryView("Accordion");
        }

    }

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
                        checked={libraryView === "Accordion"}
                        onChange={handleChangeLibDisplay}
                    /> Accordion
                </label>
                {/* Radio for the table view */}
                <label>
                    <input
                        type="radio"
                        name="library-display"
                        value="Table"
                        checked={libraryView === "Table"}
                        onChange={handleChangeLibDisplay}
                    /> Table
                </label>
            </div>
        </div>
    );
};