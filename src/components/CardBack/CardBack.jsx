import React, { Component } from "react";
import styles from "./CardBack.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import List from "../List";

class CardBack extends Component {
  shortenInstructions = (instructions) =>
    instructions.length < 300
      ? instructions
      : instructions.substring(0, 200) + "...";

  // Options for heart icon are:
  // SOLID HEART: ["fas", "heart"]
  // OPEN HEART: ["far", "heart"]

  render() {
    const { ingredients, strMeal, strInstructions } = this.props.recipe;
    return (
      <section className={styles.cardBack}>
        <span className={styles.heart}>
          <FontAwesomeIcon icon={["fas", "heart"]} />
        </span>
        <h2>{strMeal}</h2>
        <h3>Instructions</h3>
        <p>{this.shortenInstructions(strInstructions)}</p>
        <h3>Ingredients</h3>
        <div className={styles.list}>
          <List items={ingredients} />
        </div>
      </section>
    );
  }
}

export default CardBack;
