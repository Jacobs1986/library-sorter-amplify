import React from "react";

// CSS File
import "./styles/bookCard-styles.css";

export default function BookCards() {
    return (
        <div>
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
    );
};