import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

 // Styling
import './App.css';
import "./styles/layout.css";
import "./styles/buttons.css";

// Pages
import HomePage from "./pages/home-page";
import BookSearch from "./pages/book-search-page";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/search" element={<BookSearch />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;