import React, {
    useContext
} from "react";

// CSS File
import "./bookTable-styles.css";

// Import context
import { BookList } from "../homePageAccordion/homePageAccordion";

export default function BookTable() {
    // library
    const { library } = useContext(BookList);

    return (
        <div className="row">
            {/* Check the length of the bookList array */}
            {library.Books.items.length === 0 ?
                <div className="col-xs-12 col-s-12 col-lg-3 col-xl-2">
                    Time to add some books!
                </div> :
                // The table
                <div className="col-xs-12" style={{ overflowX: "auto" }}>
                    <table className="bookTable">
                        {/* Table header */}
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Author(s)</th>
                                <th>ISBN</th>
                            </tr>
                        </thead>
                        {/* Table Body */}
                        <tbody>
                            {library.Books.items.map((book, i) => (
                                <tr key={i}>
                                    <td>{book.title}</td>
                                    <td>{book.author}</td>
                                    <td>{book.isbn}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            }
        </div>
    );
};