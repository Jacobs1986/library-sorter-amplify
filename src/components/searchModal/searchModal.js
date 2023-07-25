import React, { useState, useEffect, useContext, createContext } from "react";

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

// Components
import BookInfo from "./bookInfoComp";
import InputInfo from "./inputInfo";

// Context
export const SearchModalContext = createContext();

export default function DisplayModal() {
    // set googleBookId hook
    const { googleBookId, setGoogleBookId } = useContext(GoogleBookId);
    // show modal hook
    const [showModal, setShowModal] = useState("none");
    // hook for bookInfo
    const [bookInfo, setBookInfo] = useState();
    // Set the volumeInfo
    const [volumeInfo, setVolumeInfo] = useState()

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
                                <button className="tab" name="InputData" onClick={openTab}>Input Data</button>
                            </div>
                            <SearchModalContext.Provider value={{ volumeInfo }}>
                                <div id="BookInfo" className="tabContent">
                                    <BookInfo />
                                </div>
                                <div id="InputData" className="tabContent" style={{ display: "none" }}>
                                    <InputInfo />
                                </div>
                            </SearchModalContext.Provider>
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