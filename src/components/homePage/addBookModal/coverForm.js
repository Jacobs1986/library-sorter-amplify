import React, {
    useContext,
    useState
} from "react";

// CSS File
import "./addBookModal-styles.css";

// Import context
import { NewInfoContext } from "./addBookModal";

export default function CoverForm() {
    // NewInfoContext values
    const { newInfo, handleInputBookInfo } = useContext(NewInfoContext)
    // checked value
    const [checkedState, setCheckedState] = useState(false);

    // Funtion for toggoling the checkedState
    const handleToggleChecked = () => {
        setCheckedState(!checkedState);
    }

    return (
        <div>
            {/* Cover */}
            <div className="row">
                <div className="modalHeader-3">Cover</div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-s-6">
                    <div className="col-xs-12 col-s-12 modal-label">
                        Input link to cover image here:
                    </div>
                    {/* Links input */}
                    <div className="col-xs-12 col-s-12">
                        <input
                            className="modal-input"
                            type="text"
                            name="cover"
                            value={newInfo.cover}
                            onChange={handleInputBookInfo}
                            disabled={!checkedState ? false : true}
                        />
                    </div>
                    {/* Default checkbox */}
                    <div className="col-xs-12 col-s-12">
                        <input
                            type="checkbox"
                            id="defaultCover"
                            name="cover"
                            checked={checkedState}
                            onChange={handleToggleChecked}
                        />
                        <label className="modal-label" htmlFor="defaultCover">Use default image</label>
                    </div>
                    {/* Image */}
                    <div className="col-xs-12">
                        <img
                            className="newBookCover"
                            src={!checkedState ? newInfo.cover : "./Images/blank-cover.png"}
                            alt="Cover image"
                        />
                    </div>
                </div>
                {/* Image column */}
                <div className="col-xs-12 col-s-6">

                </div>
            </div>
        </div>
    );
};