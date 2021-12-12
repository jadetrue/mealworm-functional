import React from "react";
import styles from "./Cookbook.module.scss";
import recipes from "../../data/recipes";
import FeedbackPanel from "../../components/FeedbackPanel/FeedbackPanel";
import CardList from "../../components/CardList/index";

const Cookbook = () => {
    const favs = recipes.filter((recipe) => recipe.isFav);

    return (
        <section className={styles.cookbook}>
            {!favs ? (
                <CardList recipes={recipes} />
            ) : (
                <FeedbackPanel
                    header="No favourites"
                    text="Try returning to your dashboard and searching for a meal of choice."
                />
            )}
        </section>
    );
};
export default Cookbook;
