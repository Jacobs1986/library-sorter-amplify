import React, {
    createContext,
    useContext,
    useState
} from "react";

// Components
import HomePageBanner from "../components/homePage/banner/banner";
import NewLibraryForm from "../components/homePage/newLibraryForm/newLibraryForm";
import ViewerRadios from "../components/homePage/viewerRadios/viewerRadios";
import HomePageAccordion from "../components/homePage/homePageAccordion/homePageAccordion";
import AddBookModal from "../components/homePage/addBookModal/addBookModal";
import ViewBookModal from "../components/homePage/viewBookModal/viewBookModal";

// Import context
import { Libraries } from "../App";

// Context
export const LibInfo = createContext();

export default function HomePage() {
    // Libraries value
    const { libraries } = useContext(Libraries);
    // Set the library view
    const [libraryView, setLibraryView] = useState("Covers");
    // showModal value
    const [showAddModal, setAddShowModal] = useState(false);
    // bookId value
    const [bookId, setBookId] = useState("");

    return (
        <div>
            {/* Home Page Banner */}
            <HomePageBanner />
            <LibInfo.Provider value={{ libraryView, setLibraryView, showAddModal, setAddShowModal, bookId, setBookId }}>
                {/* New Library form */}
                <NewLibraryForm />
                {/* Radios */}
                <ViewerRadios />
                {!libraries ? <div>Loading...</div> :
                    <>
                        {/* Library Accordion */}
                        <HomePageAccordion />
                        {/* Add Book Modal */}
                        <AddBookModal />
                        {/* View Book Modal */}
                        <ViewBookModal />
                    </>
                }
            </LibInfo.Provider>
        </div>
    );
};