import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

 // Styling
import './App.css'

// Pages
import Home from "./pages/home-page";
import Search from "./pages/search-page";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/search" element={<Search />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;