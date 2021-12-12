import React from "react";
import styles from "./Dashboard.module.scss";
import CardList from "../../components/CardList";
import FeedbackPanel from "../../components/FeedbackPanel";

const DashBoard = (props) => {
    const {recipes} = props;

    const toggleFav = (recipe) => {
        recipe.isFav = !recipe.isFav;
    };

    const contentJsx =
        recipes && recipes.length ? (
            <CardList recipes={recipes} toggleFav={toggleFav} />
        ) : (
            <FeedbackPanel
                header="No recipes"
                text="Type into the searchbar to find your desired meal"
            />
        );

    return <section className={styles.dashboard}>{contentJsx}</section>;
};

export default DashBoard;
