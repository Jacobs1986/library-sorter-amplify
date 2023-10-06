import React, {
    useContext
} from "react";

// CSS File
import "./bookCard-styles.css";

// Import context
import { BookList } from "../homePageAccordion/homePageAccordion";

export default function BookCards() {
    // libraryList
    const { library } = useContext(BookList);

    return (
        <div className="row">
            {/* Check the length of the bookList array */}
            {library.Books.items.length === 0 ? 
                <div className="col-xs-12 col-s-5 col-lg-3 col-xl-2">
                    Time to add some books!
                </div> :
                library.Books.items.map((book, i) => (
                    <div className="col-xs-12 col-s-4 col-lg-3 col-xl-2" key={i}>
                        {/* The card div */}
                        <div className={book.cover === "blank-cover.png" ? "bookCard noCover" : "bookCard"}>
                            {/* Book Cover */}
                            <img
                                src={book.cover === "blank-cover.png" ? `./Images/${book.cover}` : book.cover }
                                alt="A picture of the book cover."
                                width={"100%"}
                            />
                            {/* Book Info */}
                            <div className="bookCard-info" style={book.cover === "blank-cover.png" ? { display: "block" } : { display: "none" }}>
                                <h4><b>{book.title}</b></h4>
                                <p>{book.author}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};