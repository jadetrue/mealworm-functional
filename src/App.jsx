import React from "react";
import "./App.css";
import CardBack from "./components/CardBack/CardBack";
import CardFront from "./components/CardFront";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
    return (
        <>
            <NavBar />
            <CardFront />
            <CardBack />
        </>
    );
};

export default App;
