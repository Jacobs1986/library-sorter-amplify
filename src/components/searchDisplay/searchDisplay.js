import React, { useContext, useEffect } from "react";

// CSS File
import "./searchDisplay.css";

// Import ResultContext
import { ResultContext } from "../../pages/search-page";

export default function SearchDisplay() {
    // Bring in result from ResultContext
    const { result } = useContext(ResultContext);

    useEffect(() => {
        if (result) {
            console.log('A search was made')
        } else {
            console.log('No search has been performed')
        }
    }, [result])
    
    return (
        <div>The search display will go here.</div>
    );
};