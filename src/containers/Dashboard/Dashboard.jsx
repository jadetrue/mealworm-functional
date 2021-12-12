import React from "react";
import styles from "./Dashboard.module.scss";
import recipes from "../../data/recipes";

import CardList from "../../components/CardList/CardList";

const DashBoard = () => {
    return (
        <section className={styles.dashBoard}>
            <CardList recipes={recipes} />
        </section>
    );
};

export default DashBoard;
