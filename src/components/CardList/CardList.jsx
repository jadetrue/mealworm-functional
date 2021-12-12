import React from "react";
import Card from "../Card";
import styles from "./CardList.module.scss";

const CardList = (props) => {
    const {recipes} = props;
    const getCardJsx = (recipe) => (
        <div className={styles.card} key={recipe.idMeal}>
            <Card recipe={recipe} />
        </div>
    );
    return (
        <section className={styles.cards}>{recipes.map(getCardJsx)}</section>
    );
};

export default CardList;
