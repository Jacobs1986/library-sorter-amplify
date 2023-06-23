import React, {
    useContext,
    useEffect,
    useState
} from "react";

// CSS File
import "./searchDisplay.css";

// Import ResultContext
import { ResultContext } from "../../pages/search-page";

export default function SearchDisplay() {
    // Bring in result from ResultContext
    const { result } = useContext(ResultContext);
    const [resultArray, setResultArray] = useState([]);

    useEffect(() => {
        // Ser the result to resultArray
        if (result) {
            setResultArray(result.items);
        }
    }, [result])

    return (
        <div>
            {!resultArray ? <div>There is no results</div> : <div>The results will be displayed here</div>} 
        </div>
    );
};