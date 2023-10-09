import React from "react";

// CSS File
import "./searchBar-styles.css";

// Components
import SearchForm from "./searchForm";
import SearchBarImage from "./searcBar-image";

export default function SearchBar() {
    return (
        <div>
            <div className="row">
                {/* Picture */}
                <div className="col-xs-12 col-s-6 imgCol">
                   <SearchBarImage />
                </div>
                {/* Search form */}
                <div className="col-xs-12 col-s-6">
                    <div className="formCol">
                        <SearchForm />
                    </div>
                </div>
            </div>
        </div>
    );
};