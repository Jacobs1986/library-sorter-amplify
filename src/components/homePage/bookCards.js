import React from "react";

// CSS File
import "./styles/bookCard-styles.css";

export default function BookCards() {
    return (
        <div className="row">
            <div className="col-xs-12 col-s-4 col-xl-3">
                {/* The card div */}
                <div className="bookCard">
                    {/* Book image */}
                    <img
                        src="./Images/blank-cover.png"
                        alt="A blank cover image"
                        width={"100%"}
                    />
                    {/* Book info */}
                    <div className="bookCard-info">
                        <h4><b>Title</b></h4>
                        <p>Author's Name</p>
                    </div>
                </div>
            </div>
            <div className="col-xs-12 col-s-4 col-xl-3">
                {/* The card div */}
                <div className="bookCard">
                    {/* Book image */}
                    <img
                        src="./Images/blank-cover.png"
                        alt="A blank cover image"
                        width={"100%"}
                    />
                    {/* Book info */}
                    <div className="bookCard-info">
                        <h4><b>Title</b></h4>
                        <p>Author's Name</p>
                    </div>
                </div>
            </div>
            <div className="col-xs-12 col-s-4 col-xl-3">
                {/* The card div */}
                <div className="bookCard">
                    {/* Book image */}
                    <img
                        src="./Images/blank-cover.png"
                        alt="A blank cover image"
                        width={"100%"}
                    />
                    {/* Book info */}
                    <div className="bookCard-info">
                        <h4><b>Title</b></h4>
                        <p>Author's Name</p>
                    </div>
                </div>
            </div>
        </div>
    );
};