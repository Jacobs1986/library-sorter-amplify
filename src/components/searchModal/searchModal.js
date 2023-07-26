import React, { useState, useEffect, useContext, createContext, useReducer } from "react";

// CSS File
import "./searchModal.css";

// Import Modal styling
import "../../styling/modal.css";

// Import GoogleBookId
import { GoogleBookId } from "../../pages/search-page";

// Import axios
import axios from "axios";

// Import book refiner function
import bookInfoRefiner from "../../functions/bookInfoRefiner";

// Import searchModalInfo function from inputCheckList
import { searchModalInfo } from "../../functions/inputChecklist";

// Import reducer
import { reducer as searchCollectorReduc } from "../../functions/reducer";

// Import API
// import { API } from "aws-amplify";

// Import mutations
// import { createBook } from "../../graphql/mutations";

// Components
import BookInfo from "./bookInfoComp";
import CollectorInfo from "./searchCollectorInfo";

// Context
export const SearchModalContext = createContext();
export const CollectorInfoInput = createContext();

export default function DisplayModal() {
    // set googleBookId hook
    const { googleBookId, setGoogleBookId } = useContext(GoogleBookId);
    // show modal hook
    const [showModal, setShowModal] = useState("none");
    // hook for bookInfo
    const [bookInfo, setBookInfo] = useState();
    // Set the volumeInfo
    const [volumeInfo, setVolumeInfo] = useState()
    // Set the collector info
    const [inputCollectorInfo, setInputCollectorInfo] = useReducer(searchCollectorReduc, {});

    useEffect(() => {
        if (googleBookId) {
            axios.get(`https://www.googleapis.com/books/v1/volumes/${googleBookId}`).then((res) => {
                // console.log(googleBookId);
                setBookInfo(res.data);
            })
        }
    }, [googleBookId])

    // Display modal with all of the content
    useEffect(() => {
        if (bookInfo) {
            // console.log(bookInfoRefiner(bookInfo))
            setVolumeInfo(bookInfoRefiner(bookInfo));
            setShowModal("block");
        }
    }, [bookInfo])

    // Close the modal
    const handleCloseModal = (event) => {
        event.preventDefault();
        setShowModal("none");
        setGoogleBookId('');
    }

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

    // Save the information of the modal
    const handleSaveGoogleInfo = (event) => {
        event.preventDefault();
        const saveInfo = searchModalInfo(volumeInfo, inputCollectorInfo);
        console.log(saveInfo);
        // Send information to the API
        // API.graphql({
        //     query: createBook,
        //     variables: { input: saveInfo }
        // }).then(res => {
        //     console.log(res.data);
        //     setShowModal("none");
        // })
    }

    return (
        <>
            {!volumeInfo ? <div></div> :
                <div className="modal" style={{ display: `${showModal}` }}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <span className="close" onClick={handleCloseModal}>&times;</span>
                            <h2>{volumeInfo.title}</h2>
                        </div>
                        <div className="modal-body">
                            <div className="modal-tabs">
                                <button className="tab" name="BookInfo" onClick={openTab}>Book Info</button>
                                <button className="tab" name="InputData" onClick={openTab}>Collector Info</button>
                            </div>
                            <SearchModalContext.Provider value={{ volumeInfo }}>
                                <div id="BookInfo" className="tabContent">
                                    <BookInfo />
                                </div>
                            </SearchModalContext.Provider>
                            <CollectorInfoInput.Provider value={{ inputCollectorInfo, setInputCollectorInfo }}>
                                <div id="InputData" className="tabContent" style={{ display: "none" }}>
                                    <CollectorInfo />
                                </div>
                            </CollectorInfoInput.Provider>

                        </div>
                        <div className="modal-footer">
                            <button className="modal-saveButton" onClick={handleSaveGoogleInfo}>Save Book</button>
                            <button className="modal-closeButton" onClick={handleCloseModal}>Close</button>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};