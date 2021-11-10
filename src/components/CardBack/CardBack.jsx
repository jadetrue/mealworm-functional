import React from "react";
import styles from "./CardBack.module.scss";

const CardBack = (props) => {
    const {strMeal, strInstructions} = props.data;

    return (
        <section className={styles.cardBack}>
            <h2>{strMeal}</h2>
            <h3>Instructions</h3>
            <p>{strInstructions.slice(0, 199) + `...`}</p>
            <h3>Ingredients</h3>
        </section>
    );
};

export default CardBack;
