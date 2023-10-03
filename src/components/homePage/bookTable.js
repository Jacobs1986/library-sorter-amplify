import React, {
    useContext
} from "react";

// CSS File
import "./styles/bookTable-styles.css";

// Import context
import { BookList } from "./table";

export default function BookTable() {
    // library
    const { library } = useContext(BookList);

    return (
        <div className="row">
            {/* Check the length of the bookList array */}
            {library.bookList.length === 0 ?
                <div className="col-xs-12 col-s-12 col-lg-3 col-xl-2">
                    Time to add some books!
                </div> :
                // The table
                <div className="col-xs-12" style={{ overflowX: "auto" }}>
                    <table className="bookTable">
                        {/* Table header */}
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>ISBN</th>
                        </tr>
                        {/* Table row */}
                        {library.bookList.map((book, i) => (
                            <tr key={i}>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>{book.isbn}</td>
                            </tr>
                        ))}
                    </table>
                </div>
            }
        </div>
    );
};