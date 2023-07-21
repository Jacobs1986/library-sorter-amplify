import React, { useState, useEffect, useContext } from "react";

// CSS File
import "./modalver2.css";

// Import GoogleBookId
import { GoogleBookId } from "../../pages/search-page";

// Import axios
import axios from "axios";

// Import book refiner function
import bookInfoRefiner from "./bookInfoRefiner";

export default function ModalVer2() {
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
    const handleCloseModal = () => {
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
                            <div id="BookInfo" className="tabContent">
                                This is the book info tab
                            </div>
                            <div id="InputData" className="tabContent" style={{ display: "none" }}>
                                This is the tab for inputing data
                                </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};