import React from "react";
import styles from "./Dashboard.module.scss";
import recipes from "../../data/recipes";
import CardList from "../../components/CardList";
import FeedbackPanel from "../../components/FeedbackPanel";

const DashBoard = (props) => {
    const {recipes} = props;

    const toggleFav = (recipe) => {
        recipe.isFav = !recipe.isFav;
    };

    const contentJsx = recipes.length ? (
        <CardList recipes={recipes} toggleFav={toggleFav} />
    ) : (
        <FeedbackPanel
            header="No matches"
            text="None of our recipes matched that search"
        />
    );

    return <section className={styles.dashboard}>{contentJsx}</section>;
};

export default DashBoard;
