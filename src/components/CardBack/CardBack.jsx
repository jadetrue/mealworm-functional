import React, {useState} from "react";
import styles from "./CardBack.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import List from "../List";

const CardBack = (props) => {
    const [isFav, setIsFav] = useState(false);

    const shortenInstructions = (instructions) =>
        instructions.length < 300
            ? instructions
            : instructions.substring(0, 200) + "...";

    const toggleFav = (e) => {
        e.stopPropagation();
        setIsFav(!isFav);
    };

    const heartIcon = isFav ? ["fas", "heart"] : ["far", "heart"];

    const {ingredients, strMeal, strInstructions} = props.recipe;

    return (
        <section className={styles.cardBack}>
            <span className={styles.heart} onClick={toggleFav}>
                <FontAwesomeIcon icon={heartIcon} />
            </span>
            <h2>{strMeal}</h2>
            <h3>Instructions</h3>
            <p>{shortenInstructions(strInstructions)}</p>
            <h3>Ingredients</h3>
            <div className={styles.list}>
                <List items={ingredients} />
            </div>
        </section>
    );
};

export default CardBack;
