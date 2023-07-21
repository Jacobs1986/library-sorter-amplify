import React from "react";

// CSS File
import "./homeDisplay.css";

export default function HomeDisplay() {
    return (
        <div className="displayContainer">
            <>
                <img 
                    src="http://books.google.com/books/publisher/content?id=6RSoAAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71tO57SU0_YMc9WBnSum0SqmlCEqVhJxg28MP9HtOHDe1X7EM2IaAtGnXlvRwwP88y2gWqT7PymnNFUqMW6efAFSmpOF-eEdzY0j4Mu5PlTH6jIUxuEgrmmlo0jLb8Ey5oYfTHW&source=gbs_api"
                    alt="Book cover"
                />
            </>
            <>
                <img 
                    src="./Images/blank-cover.png"
                    alt="Book cover"
                />
            </>
        </div>
    );
};