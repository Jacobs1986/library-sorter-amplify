import React, {
    useContext
} from "react";

// CSS File
import "./styles/radio-styles.css";
import "./styles/media-queries.css";

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
            // default is Cover
            default:
                setLibraryView("Covers");
        }

    }

    return (
        <div className="row">
            <div className="col-xs-12 radioDiv">
                <span>Toggle Library View:</span>
                {/* Radio for the covers view */}
                <label>
                    <input
                        type="radio"
                        name="library-display"
                        value="Covers"
                        checked={libraryView === "Covers"}
                        onChange={handleChangeLibDisplay}
                    /> Covers
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