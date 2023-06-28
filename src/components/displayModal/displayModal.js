import React, { useState } from "react";

// CSS File
import "./displayModal.css";

export default function DisplayModal() {
    const [showModal, setShowModal] = useState("none")

    // Create the function for opening the modal
    const handleOpenModal = () => {
        setShowModal("block");
    }

    // Close the modal
    const handleCloseModal = () => {
        setShowModal("none");
    }

    return (
        <>
            <button onClick={handleOpenModal}>Open modal</button>
            <div className="modal" style={{ display: `${showModal}` }}>
                <div className="modal-content">
                    <div className="modal-header">
                        <span className="close" onClick={handleCloseModal}>&times;</span>
                        <h2>Fried Green Tomatoes at the Whistle Stop Cafe</h2>
                    </div>
                    <div className="modal-body container">
                        <div className="row">
                            <div className="col-6">
                                <img 
                                    src="http://books.google.com/books/content?id=4B5f_1IoVoYC&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE70Son-UpSRJNlUxCDAzRCvql9mLpwsvijHs4bJFhdIl4WxAiVouiF9rww830xpZVfC-PwfRr1_SW6VXygcuvzv4zV2_HzUZUWZz0XpSymhc_fdeTQ9NVWlHvstwWU4l3a4BwAVe&source=gbs_api"
                                    alt="Book cover"
                                    style={{width: "100%"}}
                                />
                            </div>
                            <div className="col-6 bookInfo">
                                <p><span className="modalInlineLabel" style={{ fontWeight: "bold" }}>Author</span>: Fannie Flagg</p>
                                <p><span className="modalInlineLabel" style={{ fontWeight: "bold" }}>Publisher</span>: Ballantine Books</p>
                                <p><span className="modalInlineLabel" style={{ fontWeight: "bold" }}>Publication Date:</span>: 2011-01-26</p>
                                <p><span className="modalInlineLabel" style={{ fontWeight: "bold" }}>ISBN</span>: 9780307776655</p>
                                <p><span className="modalInlineLabel" style={{ fontWeight: "bold" }}>Page Count</span>: 432</p>
                                <p><span className="modalInlineLabel" style={{ fontWeight: "bold" }}>Description</span>:</p>
                                <p id="descriptionParagraph">Folksy and fresh, endearing and affecting, Fried Green Tomatoes at the Whistle Stop Cafe is a now-classic novel about two women: Evelyn, who’s in the sad slump of middle age, and gray-headed Mrs. Threadgoode, who’s telling her life story. Her tale includes two more women—the irrepressibly daredevilish tomboy Idgie and her friend Ruth—who back in the thirties ran a little place in Whistle Stop, Alabama, offering good coffee, southern barbecue, and all kinds of love and laughter—even an occasional murder. And as the past unfolds, the present will never be quite the same again. Praise for Fried Green Tomatoes at the Whistle Stop Cafe “A real novel and a good one [from] the busy brain of a born storyteller.”—The New York Times “Happily for us, Fannie Flagg has preserved [the Threadgoodes] in a richly comic, poignant narrative that records the exuberance of their lives, the sadness of their departure.”—Harper Lee “This whole literary enterprise shines with honesty, gallantry, and love of perfect details that might otherwise be forgotten.”—Los Angeles Times “Funny and macabre.”—The Washington Post “Courageous and wise.”—Houston Chronicle",</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};