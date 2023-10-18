import React, { 
    useContext, 
    useEffect 
} from "react";

// CSS File
import "./viewBookModal-styles.css";

// Import context
import { LibInfo } from "../../../pages/home-page";

// Import API
import { API } from "aws-amplify";

// Import getBooks
import { getBooks } from "../../../graphql/queries";

export default function ViewBookModal() {
    // LibInfo values
    const { bookId, setBookId } = useContext(LibInfo);

    // Get the book information
    useEffect(() => {
        if (bookId !== "") {
            API.graphql({
                query: getBooks,
                variables: { id: bookId }
            }).then(res => {
                console.log(res.data.getBooks);
            })
        }
    }, [bookId])

    return (
        <div>This is the modal to view books.</div>
    );
};