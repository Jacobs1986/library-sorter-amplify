import React, {
    useContext,
    useEffect
} from "react";

// CSS File
import "./styles/bookCard-styles.css";

// Import context
import { BookList } from "./accordion";

export default function BookCards() {
    // libraryList
    const { library } = useContext(BookList);

    useEffect(() => {
        console.log(library.bookList)
    },[])

    return (
        <div className="row">
            {/* Map the information */}
            {library.bookList.map((book, i) => (
                <div className="col-xs-12 col-s-4 col-lg-3 col-xl-2" key={i}>
                    {/* The card div */}
                    <div className={book.cover === "blank-cover.png" ? "bookCard noCover" : "bookCard"}>
                        {/* Book Cover */}
                        <img 
                            src={`./Images/${book.cover}`}
                            alt="A picture of the book cover."
                            width={"100%"}
                        />
                        {/* Book Info */}
                        <div className="bookCard-info" style={book.cover === "blank-cover.png" ? { display: "block"} : { display: "none"}}>
                            <h4><b>{book.title}</b></h4>
                            <p>{book.author}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};