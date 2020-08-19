import React from "react";
import styles from "./CardBack.module.scss";

const CardBack = (props) => {
  const shortenInstructions = (instructions) =>
    instructions.length < 300
      ? instructions
      : instructions.substring(0, 200) + "...";

  const { ingredients, strMeal, strInstructions } = props.recipe;
  return (
    <section className={styles.cardBack}>
      <h2>{strMeal}</h2>
      <h3>Instructions</h3>
      <p>{shortenInstructions(strInstructions)}</p>
      <h3>Ingredients</h3>
    </section>
  );
};

export default CardBack;
