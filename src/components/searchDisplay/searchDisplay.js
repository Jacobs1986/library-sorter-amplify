import React, {
    useContext,
    useEffect,
    useState
} from "react";

// CSS File
import "./searchDisplay.css";

// Import ResultContext
import { SearchContext } from "../../pages/search-page";

// Import axios
import axios from "axios";

export default function SearchDisplay() {
    const { search } = useContext(SearchContext);
    // Make result hook for API
    const [ result, setResult ] = useState([]);

    useEffect(() => {
        if (search) {
            // Do API search
            axios.get(search).then((response) => {
                console.log(response.data.items);
            })
        }
    }, [search])
    return (
        <div>
            Search results go here.
        </div>
    );
};