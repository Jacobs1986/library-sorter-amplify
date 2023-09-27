import React from "react";

// Components
import AccordionView from "../components/homePage/accordion";
import HomePageBanner from "../components/homePage/banner";
import NewLibraryForm from "../components/homePage/newLibraryForm";
import TableView from "../components/homePage/table";
import ViewerRadios from "../components/homePage/viewerRadios";

export default function HomePage() {
    return (
        <div>
            {/* Home Page Banner */}
            <HomePageBanner />
            {/* Radios */}
            <ViewerRadios />
            {/* Accordion View */}
            <AccordionView />
            {/* Table view */}
            <TableView />
            {/* New Library form */}
            <NewLibraryForm />
        </div>
    );
};