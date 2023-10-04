import React from "react";
import { AiFillCaretRight } from "react-icons/ai";

// CSS File
import "./styles/newLibraryForm-styles.css";

export default function NewLibraryForm() {

    // Funtion to show the form
    const handleShowForm = event => {
        // Get the elements id
        let elementId = event.target.id;
        // Get the next className of the span
        let currentClass = document.getElementById(elementId).firstElementChild;
        // Begin the switch statement
        switch (currentClass.className) {
            // If the currentClass is rightArrow
            case "rightArrow":
                // Add activeForm
                currentClass.className += " activeForm";
                break
            // Default
            default:
                // Remove activeForm
                currentClass.className = "rightArrow";
        }
    }

    return (
        <div className="md-font-size lg-font-size xl-font-size">
            {/* Button to show the form */}
            <div className="row">
                <div className="col-xs-12">
                    <div className="button" onClick={handleShowForm} id="showNewLibForm">
                        Add New Library
                        <span className="rightArrow" ><AiFillCaretRight /></span>
                    </div>
                </div>
            </div>
            {/* The form */}
            <div className="row">
                <form>
                    <div className="row">
                        {/* Label */}
                        <div className="col-xs-12 col-s-3 col-lg-2 center-form-label">
                            <label className="boldLabel" htmlFor="newLibName">Library Name:</label>
                        </div>
                        {/* Input */}
                        <div className="col-xs-12 col-s-7 col-lg-4">
                            <input type="text" id="newLibName" name="newName" />
                        </div>
                    </div>
                    {/* Submit and Cancel buttons */}
                    <div className="row">
                        <div className="col-xs-12">
                            <button className="formButton-btm">Submit</button>
                            <button>Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};