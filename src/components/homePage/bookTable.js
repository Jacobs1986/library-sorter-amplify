import React from "react";

// CSS File
import "./styles/bookTable-styles.css";

export default function BookTable() {
    return (
        <div className="row">
            {/* The table */}
            <div className="col-xs-12" style={{ overflowX: "auto" }}>
                <table className="bookTable">
                    {/* Table header */}
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>ISBN</th>
                    </tr>
                    {/* Table row */}
                    <tr>
                        <td>Jung and Tarot: An Archetypal Journey</td>
                        <td>Sallie Nichols</td>
                        <td>9780877285151</td>
                    </tr>
                </table>
            </div>
        </div>
    );
};