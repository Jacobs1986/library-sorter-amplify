import React from "react";

// CSS File
import "./banner-styles.css";

export default function Banner() {
    return (
        <div>
            <div className="bannerContainer">
                {/* Image */}
                <img
                    src={require("./magnifying-glass-with-book-table.jpg")}
                    alt="Image of a book with a magnifying glass. Image by awesomecontent on Freepik"
                    width={"100%"}
                />
                <div className="bottom-right attributionLink">
                Image by <a href="https://www.freepik.com/free-photo/magnifying-glass-with-book-table_991460.htm#query=book%20search&position=5&from_view=search&track=ais" target="_blank">awesomecontent</a> on Freepik
                </div>
            </div>
        </div>
    );
};