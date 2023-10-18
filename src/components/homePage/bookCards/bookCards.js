import React, {
    useContext, useEffect, useState
} from "react";

// CSS File
import "./bookCard-styles.css";
import "../../../styles/cards.css";

// Import context
import { LibInfo } from "../../../pages/home-page";
import { BookList } from "../homePageAccordion/homePageAccordion";

// Import sorting function
import { titleASC } from "../../../functions/arraySortFuncs";

export default function BookCards() {
    // LibInfo values
    const { setBookId } = useContext(LibInfo);
    // libraryList
    const { library } = useContext(BookList);
    // titleSort values
    const [titleSort, setTitleSort] = useState();

    //Sort library
    useEffect(() => {
        // Set bookList
        let bookList = library.Books.items;
        // Sort bookList
        let sortList = bookList.sort(titleASC);
        // Make sortList titleSort
        setTitleSort(sortList);
    }, [])

    // Get information about the book
    const handleGetBookInfo = event => {
        setBookId(event.target.id);
    }

    return (
        <div className="row">
            {!titleSort ? <div>Loading...</div> :
                // Display the books, sorted
                titleSort.length === 0 ?
                    <div className="col-xs-12 col-s-5 col-lg-3 col-xl-2">
                        Time to add some books!
                    </div> :
                    titleSort.map(book => (
                        <div className="col-xs-6 col-s-3 col-m-4 col-lg-2 col-xl-2" key={book.id}>
                            {/* Card body */}
                            <div className="card">
                                {/* Card Image */}
                                <img
                                    className="card-image"
                                    src={book.cover}
                                    alt={`Image of the cover for ${book.title}`}
                                    id={book.id} 
                                    onClick={handleGetBookInfo}
                                />
                                {/* Card title */}
                                <div className="card-title" style={book.cover === "./Images/blank-cover.png" ? { display: "block" } : { display: "none" }} >
                                    {book.title}
                                </div>
                            </div>
                        </div>
                    ))

            }
        </div>
    );
};