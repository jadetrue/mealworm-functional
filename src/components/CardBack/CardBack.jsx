import React, { useState } from "react";
import styles from "./CardBack.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import List from "../List";

const CardBack = (props) => {
  const { recipe, toggleFav } = props;
  const { ingredients, strMeal, strInstructions, isFav } = recipe;
  const [favState, setFavState] = useState(isFav);

  const shortenInstructions = (instructions) =>
    instructions.length < 300
      ? instructions
      : instructions.substring(0, 200) + "...";

  const handleFavClick = (e) => {
    e.stopPropagation();
    toggleFav(recipe);
    setFavState(!isFav);
  };

  const heartIcon = favState ? ["fas", "heart"] : ["far", "heart"];

  return (
    <section className={styles.cardBack}>
      <span className={styles.heart} onClick={handleFavClick}>
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
