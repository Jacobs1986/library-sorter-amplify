import React, {
    useEffect,
    useState,
    useReducer
} from "react";
import { AiFillCaretRight } from "react-icons/ai";

// CSS File
import "./styles/newLibraryForm-styles.css";

// Import reducer
import { reducer as newLibReducer } from "../../functions/reducer";

export default function NewLibraryForm() {
    const [showForm, setShowForm] = useState(true);
    const [newLibName, setNewLibName] = useReducer(newLibReducer, {});

    // Funtion to show the form
    const handleShowForm = event => {
        // Change showForm state
        setShowForm(!showForm);
    }

    // Function for handling the name input
    const handleNewNameInput = event => {
        // Input new name
        setNewLibName({
            type: 'add',
            name: event.target.name,
            value: event.target.value
        })
    }

    // Function to close the form and clear the data
    const handleCloseForm = () => {
        // Change showForm state
        setShowForm(!showForm);
        // Reset newLibName
        setNewLibName({ type: 'reset' });
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
                            <input type="text" id="newLibName" name="name" value={newLibName.name || ""} onChange={handleNewNameInput} />
                        </div>
                    </div>
                    {/* Submit and Cancel buttons */}
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="button formButton-btm btnGo">Submit</div>
                            <div className="button formButton-btm btnStop" onClick={handleCloseForm}>Cancel</div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};