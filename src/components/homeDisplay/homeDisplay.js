import React, {
    useState,
    useEffect
} from "react";

// Import API
import { API } from "aws-amplify";

// Import GraphQl query
import { listBooksDisplay } from "../../graphql/queries";

// CSS File
import "./homeDisplay.css";

export default function HomeDisplay() {
    // Book list hook
    const [bookList, setBookList] = useState();

    useEffect(() => {
        // Get all of the books from the database
        API.graphql({
            query: listBooksDisplay
        }).then(res => {
            setBookList(res.data.listBooks.items)
        })
    })

    // Function for handling viewing a book
    const handleViewBook = (event, bookId) => {
        event.preventDefault();
        console.log(bookId);
    }

    return (
        <div>
            {!bookList ? <div>No Books</div> :
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
        </div>
    );
};