import React from "react";
import "./App.css";
import {CardBack} from "./components/CardBack/CardBack";
import CardFront from "./components/CardFront";

const App = () => {
    return (
        <>
            <CardFront />
            <CardBack />
        </>
    );
};

export default App;
