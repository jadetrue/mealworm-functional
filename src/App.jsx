import React, {Component} from "react";
import styles from "./App.module.scss";
import CardFront from "./components/CardFront";
import CardBack from "./components/CardBack";
import NavBar from "./components/NavBar";

import recipes from "./data/recipes";

const App = () => {
    const alternate = (recipe) => (
        <>
            <CardFront key={recipe.idMeal} recipe={recipe} />
            <CardBack recipe={recipe} />
        </>
    );

    return (
        <>
            <section className={styles.nav}>
                <NavBar />
            </section>
            <section className={styles.content}>
                {recipes.map(alternate)}
            </section>
        </>
    );
};

export default App;
