import React from "react";
import styles from "./Dashboard.module.scss";
import recipes from "../../data/recipes";
import CardList from "../../components/CardList/CardList";
import FeedbackPanel from "../../components/FeedbackPanel/FeedbackPanel";

const DashBoard = (props) => {
    const {searchText} = props;
    const isFav = (recipe) => {
        recipe.isFav = !recipe.isFav;
    };

    const matchingRecipes = recipes.filter((recipe) => {
        const name = recipe.strMeal.toLowerCase();
        return name.includes(searchText.toLowerCase());
    });

    return (
        <section className={styles.dashBoard}>
            {matchingRecipes ? (
                <CardList recipes={matchingRecipes} isFav={isFav} />
            ) : (
                <FeedbackPanel
                    header="No matching recipes"
                    text="Please search again"
                />
            )}
        </section>
    );
};

export default DashBoard;
