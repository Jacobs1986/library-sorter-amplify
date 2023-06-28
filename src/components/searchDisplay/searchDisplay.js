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
    const [result, setResult] = useState();
    // Creating a display hook 
    const [display, setDisplay] = useState();
    // Variable that allows for development
    const development = true;

    useEffect(() => {
        if (search) {
            // Do API search
            axios.get(search)
                .then((res) => {
                    setResult(res.data)
                })
        }
    }, [search])

    // Set display hook
    useEffect(() => {
        if (!result) {
            return
        } else {
            setDisplay(result);
            setResult('');
        }
    }, [result])

    return (
        <>
            {development ? 
            <div className="displayContainer">
                <div className="displayCard">
                    <div className="cardImage">
                        <img
                            src={require("./blank-cover.jpeg")}
                            alt="Book cover"
                        />
                    </div>
                    <div className="bookTitle">
                        <h4>Book Title</h4>
                    </div>
                </div>
                <div className="displayCard">
                    <div className="cardImage">
                        <img
                            src="http://books.google.com/books/content?id=4B5f_1IoVoYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            alt="Book cover"
                        />
                    </div>
                </div>
                <div className="displayCard">
                    <div className="cardImage">
                        <img
                            src={require("./blank-cover.jpeg")}
                            alt="Book cover"
                        />
                    </div>
                    <div className="bookTitle">
                        <h4>Book Title</h4>
                    </div>
                </div>
                <div className="displayCard">
                    <div className="cardImage">
                        <img
                            src="http://books.google.com/books/content?id=4B5f_1IoVoYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                            alt="Book cover"
                        />
                    </div>
                </div>
            </div> :
            <>
                The development is off
            </>    
        }
        </>
    )
};