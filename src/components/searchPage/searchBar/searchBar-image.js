import React from "react";

// CSS File
import "./searchBar-styles.css";

export default function SearchBarImage() {
    return (
        <>
            <div className="bannerContainer searchImageContainer">
                <img
                    src={require("./books-magnifying-glass.jpg")}
                    width={"100%"}
                />
                {/* Attribution Link */}
                <div className="bottom-right attributionLink">
                    Image by <a href="https://www.freepik.com/free-photo/books-magnifying-glass_22207266.htm#query=book%20search&position=3&from_view=search&track=ais" target="_blank">fabrikasimf</a> on Freepik
                </div>
            </div>
        </>
    );
};