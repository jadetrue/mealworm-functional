import React from "react";
import styles from "./App.module.scss";
import Card from "./components/Card";

import NavBar from "./components/NavBar";

import library from "./data/fa-library";
import recipes from "./data/recipes";

const App = () => {
    const getCardJsx = (recipe) => (
        <div key={recipe} className={styles.card}>
            <Card recipe={recipe} />
        </div>
    );

    return (
        <>
            <section className={styles.nav}>
                <NavBar />
            </section>
            <section className={styles.content}>
                {recipes.map(getCardJsx)}
            </section>
        </>
    );
};

export default App;
