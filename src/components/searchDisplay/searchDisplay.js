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
            console.log(result.items)
        } else {
            console.log('There are no results')
        }
    }, [result])

    return (
        <div>
            {resultArray.length === 0 ?
                <div>
                    There is nothing to display
                </div> :
                <div>
                    {resultArray[0].volumeInfo.title}
                </div>  
        }
        </div>
    );
};