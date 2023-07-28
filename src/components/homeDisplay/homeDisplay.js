import React, {
    createContext,
    useState,
    useEffect
} from "react";

// Import API
import { API } from "aws-amplify";

// Import GraphQl query
import { listByTitleASC } from "../../graphql/queries";

// CSS File
import "./homeDisplay.css";

// Import Display Book Modal
import DisplayBookModal from "../displayBookModal/displayBookModal";

// Create and export 
export const BookIdContext = createContext();

export default function HomeDisplay() {
    // Book list hook
    const [bookList, setBookList] = useState();
    // Hook for the bookId
    const [bookId, setBookId] = useState();
    // hook to update the information so that everything isn't running continously
    const [updateInfo, setUpdateInfo] = useState(false);

    useEffect(() => {
        // Get all of the books from the database
        API.graphql({
            query: listByTitleASC
        }).then(res => {
            // console.log(res.data.listBooksByTitle.items);
            setBookList(res.data.listBooksByTitle.items);
            setUpdateInfo(false);
        })
    }, [updateInfo])

    // Function for handling viewing a book
    const handleViewBook = (event, buttonId) => {
        event.preventDefault();
        setBookId(buttonId);
    }

    return (
        <div>
            {!bookList || bookList.length === 0 ? <div>No Books</div> :
                <div className="displayContainer homePageDisplay">
                    {bookList.map(book => (
                        <div className="coverContainer" key={book.id}>
                            <img
                                src={book.cover}
                                alt="Book Cover"
                                className="coverImage"
                                style={{ width: "100%" }}
                            />
                            {book.cover === "./Images/blank-cover.png" ?
                                <h4>{book.title}</h4> :
                                <div></div>
                            }
                            <div className="middle">
                                <div
                                    className="coverButton"
                                    value={book.id}
                                    onClick={(event) => handleViewBook(event, book.id)}>
                                    View More Info
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            }
            <BookIdContext.Provider value={{ bookId, setBookId, setUpdateInfo }}>
                <DisplayBookModal />
            </BookIdContext.Provider>
        </div>
    );
};