import React from "react";

// CSS File
import "./styles/banner-styles.css";
import "./styles/media-queries.css";

export default function HomePageBanner() {
    return (
        <div>
            <div className="bannerContainer">
                {/* Image */}
                <img
                    src="./Images/home-page-banner.jpg"
                    alt="Picture of an antique bookshelf. Image provided by vecstock."
                    width={"100%"}
                />
                {/* Name of site */}
                <div className="centerBannerText">
                    Library Database
                </div>
                {/* Attribution link */}
                <div className="bottom-right attributionLink">
                    Image By <a href="https://www.freepik.com/free-ai-image/abundant-collection-antique-books-wooden-shelves-generated-by-ai_42138866.htm#query=library%20background&position=0&from_view=keyword&track=ais">vecstock</a>
                </div>
            </div>
        </div>
    );
};