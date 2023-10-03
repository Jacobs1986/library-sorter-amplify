import React, {
    createContext,
    useContext,
    useState
} from "react";

// CSS File
import "./styles/accordion-styles.css";

// Components
import BookCards from "./bookCards";

// Import context
import { LibInfo } from "../../pages/home-page";

// Create a BookList context
export const BookList = createContext();

export default function AccordionView() {
    // prevId
    const [prevId, setPrevId] = useState("");
    // libraryList
    const { libraryList } = useContext(LibInfo);

    const handleShowLib = event => {
        // First get the id of the element
        let elementId = event.target.id;
        // Get the next sibling
        let panel = document.getElementById(elementId).nextElementSibling;
        // Begin conditional
        // If elementId and prevId do not match AND prevId is defined
        if (elementId !== prevId && prevId !== "") {
            // Get the state of the prevPanel
            let prevPanel = document.getElementById(prevId).nextElementSibling;
            // Close the prev panel
            prevPanel.className = "panel";
            // Open the new panel
            panel.className += " responsive";
            // Set elementId to prevId
            setPrevId(elementId);
        }
        // If elementId and prevId match
        else if (elementId === prevId) {
            // Check the state of panel.className
            if (panel.className === "panel") {
                // Add the responsive class
                panel.className += " responsive";
            } else {
                // Set to have panel class only
                panel.className = "panel"
            }
        }
        // The default
        else {
            // Open the new panel
            panel.className += " responsive";
            // Set elementId to prevId
            setPrevId(elementId);
        }
    }

    return (
        <div className="row accordion-row">
            {/* Begin mapping the information */}
            {libraryList.map((library, i) => (
                <div className="col-xs-12 col-s-12" key={i}>
                    {/* Accordion button */}
                    <button className="accordion" id={library.id} onClick={handleShowLib}>{library.name}</button>
                    {/* Panel for the accordion */}
                    <div className="panel">
                        <BookList.Provider value={{ library }}>
                            <BookCards />
                        </BookList.Provider>
                    </div>
                </div>
            ))}
        </div>
    );
};