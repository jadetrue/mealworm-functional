import React from "react";
import styles from "./Dashboard.module.scss";
import recipes from "../../data/recipes";
import CardList from "../../components/CardList/CardList";

const DashBoard = () => {
    const isFav = (recipe) => {
        recipe.isFav = !recipe.isFav;
    };

    return (
        <section className={styles.dashBoard}>
            <CardList recipes={recipes} isFav={isFav} />
        </section>
    );
};

export default DashBoard;
