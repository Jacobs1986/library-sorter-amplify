import React, { useState } from "react";

// CSS File
import "./modalver2.css";

export default function ModalVer2() {
    // toggle modal state
    const [showModal, setShowModal] = useState("block")

    // Close the modal
    const handleCloseModal = () => {
        setShowModal("none");
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
        <div className="modal" style={{ display: `${showModal}` }}>
            <div className="modal-content">
                <div className="modal-header">
                    <span className="close" onClick={handleCloseModal}>&times;</span>
                    <h2>Tabbed Modal</h2>
                </div>
                <div className="modal-body">
                    <div className="modal-tabs">
                        <button className="tab" name="Tab1" onClick={openTab}>Tab 1</button>
                        <button className="tab" name="Tab2" onClick={openTab}>Tab 2</button>
                    </div>
                    <div id="Tab1" className="tabContent">This is the first tab</div>
                    <div id="Tab2" className="tabContent" style={{ display: "none" }}>This is the second tab</div>
                </div>
            </div>
        </div>
    );
};