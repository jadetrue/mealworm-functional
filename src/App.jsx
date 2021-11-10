import React from "react";
import styles from "./App.module.scss";
import CardFront from "./components/CardFront";
import CardBack from "./components/CardBack";
import NavBar from "./components/NavBar";

import data from "./data/recipes";

const App = () => {
    return (
        <>
            <section className={styles.nav}>
                <NavBar />
            </section>
            <section className={styles.content}>
                <CardFront data={data[0]} />
                <CardBack data={data[0]} />
            </section>
        </>
    );
};

export default App;
