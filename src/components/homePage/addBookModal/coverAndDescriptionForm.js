import React, {
    useContext,
    useState
} from "react";

// CSS File
import "./addBookModal-styles.css";

// Import context
import { NewInfoContext } from "./addBookModal";

export default function CoverAndDescription() {
    // NewInfoContext values
    const { basicInfo, setBasicInfo } = useContext(NewInfoContext)
    // checked value
    const [checkedState, setCheckedState] = useState(false);

    // Funtion for toggoling the checkedState
    const handleToggleChecked = () => {
        // Change the checked state
        setCheckedState(!checkedState);
        // Set the default to newInfo.cover
        setBasicInfo({
            type: 'add',
            name: 'cover',
            value: './Images/blank-cover.png'
        })
    }

    // Function for inputting information
    const handleInputBasicInfo = event => {
        setBasicInfo({
            type: 'add',
            name: event.target.name,
            value: event.target.value
        })
    }

    return (
        <div>
            {/* Cover Column */}
            <div className="row">
                <div className="col-xs-12 col-s-6">
                    <div className="modalHeader-3">Cover</div>
                    <div className="col-xs-12 col-s-12 modal-label">
                        Link to cover image:
                    </div>
                    {/* Links input */}
                    <div className="col-xs-12 col-s-12">
                        <input
                            className="modal-input"
                            type="text"
                            name="cover"
                            value={basicInfo.cover}
                            onChange={handleInputBasicInfo}
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
                        {!checkedState && !basicInfo.cover ? <div></div> :
                            <img
                                className="newBookCover"
                                src={!checkedState ? basicInfo.cover : "./Images/blank-cover.png"}
                                alt="Cover image"
                            />
                        }
                    </div>
                </div>
                {/* Description Column */}
                <div className="col-xs-12 col-s-6">
                    <div className="modalHeader-3">Description</div>
                    {/* Description input */}
                    <div className="col-xs-12 col-s-12">
                        <textarea
                            className="modal-input modal-textArea"
                            name="description"
                            value={basicInfo.description}
                            onChange={handleInputBasicInfo}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};