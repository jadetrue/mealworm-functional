import React, { Component } from "react";
import styles from "./CardBack.module.scss";

const CardBack = (props) => {
  const { ingredients, strMeal, strInstructions } = props.recipe;

  const shortenInstructions = (instructions) =>
    instructions.length < 300
      ? instructions
      : instructions.substring(0, 200) + "...";

  return (
    <section className={styles.cardBack}>
      <h2>{strMeal}</h2>
      <h3>Instructions</h3>
      <p>{this.shortenInstructions(strInstructions)}</p>
      <h3>Ingredients</h3>
    </section>
  );
};

export default CardBack;
