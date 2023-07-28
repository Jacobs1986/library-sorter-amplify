import React from "react";

// Components
import HomeDisplay from "../components/homeDisplay/homeDisplay";

export default function Home() {
    return (
        <div>
            <h1>Library</h1> <a href="/search">Search for Books</a>
            <HomeDisplay />
        </div>
    );
};