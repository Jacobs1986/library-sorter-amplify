import React, {
    useContext
} from "react";

// CSS File
import "./bookCard-styles.css";
import "../../../styles/cards.css";

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
                library.Books.items.map(book => (
                    <div className="col-xs-6 col-s-3 col-m-4 col-lg-2 col-xl-2" key={book.id}>
                        {/* Card body */}
                        <div className="card">
                            {/* Card Image */}
                            <img 
                                className="card-image"
                                src={book.cover}
                                alt={`Image of the cover for ${book.title}`}
                            />
                            {/* Card title */}
                            <div className="card-title" style={book.cover === "./Images/blank-cover.png" ? { display: "block" } : { display: "none" } } >
                                {book.title}
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};