import React, {
    useContext
} from "react";

// CSS File
import "./addBookModal-styles.css";

// Import context
import { NewInfoContext } from "./addBookModal";

export default function BasicInfoForm() {
    // NewInfoContext values
    const { newInfo, handleInputBookInfo } = useContext(NewInfoContext);

    return (
        <div>
            <div className="row">
                <div className="modalHeader-3">Book Information</div>
            </div>
            {/* Basic information inputes */}
            <div className="row">
                <div className="col-xs-12 col-s-6">
                    <div className="row">
                        {/* Title */}
                        <div className="col-xs-12 col-s-12 col-m-12 col-lg-3 col-xl-2 modal-label">
                            Title:
                        </div>
                        <div className="col-xs-12 col-s-12 col-m-12 col-lg-9 col-xl-10">
                            <input className="modal-input" type="text" name="title" value={newInfo.title} onChange={handleInputBookInfo} />
                        </div>
                        {/* Author */}
                        <div className="col-xs-12 col-s-12 col-m-12 col-lg-3 col-xl-2 modal-label">
                            Author(s):
                        </div>
                        <div className="col-xs-12 col-s-12 col-m-12 col-lg-9 col-xl-10">
                            <input className="modal-input" type="text" name="author" value={newInfo.author} onChange={handleInputBookInfo} />
                            <div className="form-subText">Separate multiple authors with a ","</div>
                        </div>
                        {/* ISBN */}
                        <div className="col-xs-12 col-s-12 col-m-12 col-lg-3 col-xl-2 modal-label">
                            ISBN:
                        </div>
                        <div className="col-xs-12 col-s-12 col-m-12 col-lg-5 col-xl-4">
                            <input className="modal-input" type="text" name="isbn" value={newInfo.isbn} onChange={handleInputBookInfo} />
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-s-6">
                    <div className="row">
                        {/* Publisher */}
                        <div className="col-xs-12 col-s-12 col-m-12 col-lg-5 col-xl-2 modal-label">
                            Publisher:
                        </div>
                        <div className="col-xs-12 col-s-12 col-m-12 col-lg-7 col-xl-10">
                            <input className="modal-input alt-width" type="text" name="publisher" value={newInfo.publisher} onChange={handleInputBookInfo} />
                        </div>
                        {/* Publication Date */}
                        <div className="col-xs-12 col-s-12 col-m-12 col-lg-5 col-xl-2 modal-label">
                            Publication Date:
                        </div>
                        <div className="col-xs-12 col-s-12 col-m-12 col-lg-7 col-xl-10">
                            <input className="modal-input alt-width" type="text" name="pubDate" value={newInfo.pubDate} onChange={handleInputBookInfo} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};