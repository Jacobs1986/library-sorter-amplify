import React, {
    useState
} from "react";
import { AiFillCaretRight } from "react-icons/ai";

// CSS File
import "./styles/newLibraryForm-styles.css";

export default function NewLibraryForm() {
    const [showForm, setShowForm] = useState(true);

    // Funtion to show the form
    const handleShowForm = event => {
        // Change showForm state
        setShowForm(!showForm);
    }

    return (
        <div className="md-font-size lg-font-size xl-font-size">
            {/* Button to show the form */}
            <div className="row">
                <div className="col-xs-12">
                    <div className="button" onClick={handleShowForm} id="showNewLibForm">
                        Add New Library
                        <div className="buttonCaretRight" style={!showForm ? { rotate: "0deg" } : { rotate: "90deg" }}>
                            <AiFillCaretRight />
                        </div>
                    </div>
                </div>
            </div>
            {/* The form */}
            <div className="row">
                <form style={!showForm ? { height: "0em" } : { height: "6em" }} className="newLibForm">
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
                            <div className="button formButton-btm btnGo">Submit</div>
                            <div className="button formButton-btm btnStop">Cancel</div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};