import React, {
    useContext,
    useState,
    useReducer
} from "react";
// Icon
import { AiFillCaretRight } from "react-icons/ai";

// CSS File
import "./newLibraryForm-styles.css";

// Import API
import { API } from "aws-amplify";

// Import createLibrary
import { createLibrary } from "../../../graphql/mutations";

// Import reducer
import { reducer as newLibReducer } from "../../../functions/reducer";

// Import context
import { Libraries } from "../../../App";

export default function NewLibraryForm() {
    // setGetLibrary
    const { setGetLibrary } = useContext(Libraries);
    // showForm
    const [showForm, setShowForm] = useState(false);
    // newLibName
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

    // Function for creating a new library
    const handleCreateLib = () => {
        // Send information to the GraphQL database
        API.graphql({
            query: createLibrary,
            variables: { input: newLibName }
        }).then(res => {
            console.log(res.data);
            // set getLibrary to true
            setGetLibrary(true);
            // close the form
            handleCloseForm();
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
                <form style={!showForm ? { height: "0em" } : { height: "7em" }} className="newLibForm">
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
                            <div className="button formButton-btm btnGo" onClick={handleCreateLib}>Submit</div>
                            <div className="button formButton-btm btnStop" onClick={handleCloseForm}>Cancel</div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};