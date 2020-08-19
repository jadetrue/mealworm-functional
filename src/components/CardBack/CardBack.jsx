import React from "react";
import styles from "./CardBack.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import List from "../List";

const CardBack = (props) => {
  const shortenInstructions = (instructions) =>
    instructions.length < 300
      ? instructions
      : instructions.substring(0, 200) + "...";

  // Options for heart icon are:
  // SOLID HEART: ["fas", "heart"]
  // OPEN HEART: ["far", "heart"]

  const { ingredients, strMeal, strInstructions } = props.recipe;
  return (
    <section className={styles.cardBack}>
      <span className={styles.heart}>
        <FontAwesomeIcon icon={["fas", "heart"]} />
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
