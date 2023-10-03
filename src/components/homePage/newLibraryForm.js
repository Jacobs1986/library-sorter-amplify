import React from "react";

// CSS File
import "./styles/newLibraryForm-styles.css";

export default function NewLibraryForm() {
    return (
        <div className="md-font-size lg-font-size xl-font-size">
            {/* Button to show the form */}
            <div className="row">
                <div className="col-xs-12">
                    <button>Add New Library</button>
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
                        <div className="col-xs-12 col-s-7 col-lg-4">
                            <input type="text" id="newLibName" name="newName" />
                        </div>
                    </div>
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