import React, { useContext } from "react";

// CSS File
import "./viewBookModal-styles.css";

// Import context
import { BookData } from "./viewBookModal";

export default function CollectorInfo() {
    // BookData values
    const { bookData } = useContext(BookData);

    return (
        <div className="row">
            <h3>Collector Info</h3>
            <div className="row">
                {/* First column: Acquired From, Acquisition Date, Acquisiton Cost, Edition and Printing */}
                <div className="col-xs-12 col-s-6">
                    {/* Acquired From */}
                    <div className="row">
                        {/* Label */}
                        <div className="col-xs-12 col-m-6 col-lg-5 col-xl-4 modal-label">
                            Acquired From:
                        </div>
                        {/* Info */}
                        <div className="col-xs-12 col-m-6 col-lg-7 col-xl-8">
                            {bookData.acquiredFrom}
                        </div>
                    </div>
                    {/* Acquisition Date */}
                    <div className="row">
                        {/* Label */}
                        <div className="col-xs-12 col-m-6 col-lg-5 col-xl-4 modal-label">
                            Acquisition Date:
                        </div>
                        {/* Info */}
                        <div className="col-xs-12 col-m-6 col-lg-7 col-xl-8">
                            {bookData.acquisitionDate}
                        </div>
                    </div>
                    {/* Acquisition Cost */}
                    <div className="row">
                        {/* Label */}
                        <div className="col-xs-12 col-m-6 col-lg-5 col-xl-4 modal-label">
                            Acquisition Cost:
                        </div>
                        {/* Info */}
                        <div className="col-xs-12 col-m-6 col-lg-7 col-xl-8">
                            {bookData.acquisitionCost}
                        </div>
                    </div>
                    {/* Edition */}
                    <div className="row">
                        {/* Label */}
                        <div className="col-xs-12 col-s-4 col-m-6 col-lg-5 col-xl-4 modal-label">
                            Edition:
                        </div>
                        {/* Info */}
                        <div className="col-xs-12 col-s-8 col-m-6 col-lg-7 col-xl-8">
                            {bookData.edition}
                        </div>
                    </div>
                    {/* Printing */}
                    <div className="row">
                        {/* Label */}
                        <div className="col-xs-12 col-s-4 col-m-6 col-lg-5 col-xl-4 modal-label">
                            Printing:
                        </div>
                        {/* Info */}
                        <div className="col-xs-12 col-s-8 col-m-6 col-lg-7 col-xl-8">
                            {bookData.printing}
                        </div>
                    </div>
                </div>
                {/* Second Column: Condition, Dust Jacket, Dust Jacket Condition, Addtional Notes */}
                <div className="col-xs-12 col-s-6">
                    {/* Condition */}
                    <div className="row">
                        {/* Label */}
                        <div className="col-xs-12 col-s-7 col-m-6 col-lg-6 col-xl-5 modal-label">
                            Condition:
                        </div>
                        {/* Info */}
                        <div className="col-xs-12 col-s-5 col-m-6 col-lg-6 col-xl-7">
                            {bookData.condition}
                        </div>
                    </div>
                    {/* Dust Jacket */}
                    <div className="row">
                        {/* Label */}
                        <div className="col-xs-12 col-s-7 col-m-6 col-lg-6 col-xl-5 modal-label">
                            Dust Jacket:
                        </div>
                        {/* Info */}
                        <div className="col-xs-12 col-s-5 col-m-6 col-lg-6 col-xl-7">
                            {bookData.dustJacket}
                        </div>
                    </div>
                    {/* Dust Jacket Condition */}
                    <div className="row">
                        {/* Label */}
                        <div className="col-xs-12 col-s-7 col-m-6 col-lg-6 col-xl-5 modal-label">
                            Dust Jacket Condition:
                        </div>
                        {/* Info */}
                        <div className="col-xs-12 col-s-5 col-m-6 col-lg-6 col-xl-7">
                            {bookData.jacketCondition}
                        </div>
                    </div>
                    {/* Addtional Notes */}
                    <div className="row">
                        {/* Label */}
                        <div className="col-xs-12 col-s-12 modal-label">
                            Additional Notes:
                        </div>
                        {/* Info */}
                        <div className="col-xs-12 col-s-12">
                            {bookData.additionalNotes}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};