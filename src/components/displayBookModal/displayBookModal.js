import React, {
    createContext,
    useState,
    useEffect,
    useContext,
    useReducer
} from "react";

// CSS File
import "./displayBookModal.css";

// Import API
import { API } from "aws-amplify";

// Import getBook from queries
import { getBook } from "../../graphql/queries";

// Import updateBook from mutations
import { updateBook } from "../../graphql/mutations";

// Import BookIdContext
import { BookIdContext } from "../homeDisplay/homeDisplay";

// Import reducer
import { reducer as editReducer } from "../../functions/reducer";

// Import components
import BasicBookInfo from "./basicBookInfo";
import CollectorInfo from "./collectorInfo";
import EditBookInfo from "./editBookInfo";

// Create context
export const BookInfoContext = createContext();
export const EditBookInfoContext = createContext();

export default function DisplayBookModal() {
    // Set hooks from context
    const { bookId, setBookId } = useContext(BookIdContext)
    // Hook for showing displayModal
    const [showDisplayModal, setShowDisplayModal] = useState("none");
    // Book info hook
    const [bookInfo, setBookInfo] = useState();
    // edit reducer hook
    const [editInfo, setEditInfo] = useReducer(editReducer, {})
    // Get information again
    const [getUpdated, setGetUpdated] = useState(false);

    // Initial get information
    useEffect(() => {
        if (bookId) {
            API.graphql({
                query: getBook,
                variables: { id: bookId }
            }).then(res => {
                setBookInfo(res.data.getBook);
                setShowDisplayModal("block")
            })
        }
    }, [bookId])

    // Get information again
    useEffect(() => {
        if (getUpdated) {
            API.graphql({
                query: getBook,
                variables: { id: bookId }
            }).then(res => {
                setBookInfo(res.data.getBook);
                setGetUpdated(false);
                document.getElementById("BookInfo").style.display = "block";
                document.getElementById("EditData").style.display = "none";
            })
        }
    }, [getUpdated, bookId])

    // Function for opening tabs
    const openTab = (event) => {
        const tabName = event.target.name;
        var i;
        var x = document.getElementsByClassName("tabContent");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        document.getElementById(tabName).style.display = "block";
    }

    // Save the edited information
    const handleSaveEdit = event => {
        event.preventDefault();
        // First set the edited information to newInfo
        const newInfo = {
            ...editInfo,
            "id": bookId
        }
        // Send to the database
        // console.log(newInfo);
        API.graphql({
            query: updateBook,
            variables: { input: newInfo }
        }).then(res => {
            console.log(res.data)
            setGetUpdated(true);
        })
    }

    // Function for closing the modal
    const handleCloseDisplay = () => {
        setShowDisplayModal("none")
        handleReset();
    }

    // Function for resetting everything
    const handleReset = () => {
        setBookId('')
        setEditInfo({ reset: true })
        document.getElementById("BookInfo").style.display = "block";
        document.getElementById("EditData").style.display = "none";
    }

    return (
        <div>
            {!bookInfo ? <div></div> :
                <div className="modal" style={{ display: `${showDisplayModal}` }}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <span className="close" onClick={handleCloseDisplay}>&times;</span>
                            <h2>{bookInfo.title}</h2>
                        </div>
                        <div className="modal-body">
                            <div className="modal-tabs">
                                <button className="tab" name="BookInfo" onClick={openTab}>Book Info</button>
                                <button className="tab" name="EditData" onClick={openTab}>Edit Info</button>
                            </div>
                            <BookInfoContext.Provider value={{ bookInfo }}>
                                <div id="BookInfo" className="tabContent">
                                    <BasicBookInfo />
                                    <CollectorInfo />
                                </div>
                                <EditBookInfoContext.Provider value={{ setEditInfo, handleSaveEdit }}>
                                    <div id="EditData" className="tabContent" style={{ display: "none" }}>
                                        <EditBookInfo />
                                    </div>
                                </EditBookInfoContext.Provider>
                            </BookInfoContext.Provider>
                        </div>
                        <div className="modal-footer">
                            <button className="modal-closeButton" onClick={handleCloseDisplay}>Close</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};