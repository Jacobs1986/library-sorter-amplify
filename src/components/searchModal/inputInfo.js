import React from "react";

export default function InputInfo() {
    return (
        <div>
            <h3>Use the fields below to input information</h3>
            {/* Form */}
            <form>
                <div className="row">
                    <div className="col-6">
                        <label htmlFor="authorName">Author(s)</label>
                        <input type="text" id="authorName" name="authorName" />
                    </div>
                    <div className="col-6">
                        <label htmlFor="isbn">ISBN</label>
                        <input type="text" id="isbn" name="isbn" />
                    </div>
                </div>
            </form>
        </div>
    );
};