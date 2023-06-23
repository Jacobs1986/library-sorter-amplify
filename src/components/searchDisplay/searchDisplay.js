import React, { useContext, useEffect } from "react";

// CSS File
import "./searchDisplay.css";

// Import ResultContext
import { ResultContext } from "../../pages/search-page";

export default function SearchDisplay() {
    // Bring in result from ResultContext
    const { result } = useContext(ResultContext);
    return (
        <div>The search display will go here.</div>
    );
};