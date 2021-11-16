import React from "react";
import styles from "./CardBack.module.scss";
import List from "../List";

const CardBack = (props) => {
    const {ingredients, strMeal, strInstructions} = props.recipe;

    return (
        <section className={styles.cardBack}>
            <h2>{strMeal}</h2>
            <h3>Instructions</h3>
            <p>{strInstructions.slice(0, 199) + `...`}</p>
            <h3>Ingredients</h3>
            <div className={styles.List}>
                <List items={ingredients} />
            </div>
        </section>
    );
};

export default CardBack;
