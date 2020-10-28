import React from "react";
import styles from "./CardFront.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardFront = (props) => {
  const {
    meal,
    mealThumb,
    youtube,
    source,
    area,
  } = props.recipe;

  return (
    <div className={styles.cardFront}>
      <img src={mealThumb} alt="Thai Green Curry" />
      <section className={styles.recipeDetails}>
        <h2>{meal}</h2>
        <p>
          <FontAwesomeIcon icon="globe" />
          <span>{area}</span>
        </p>
        <div className={styles.links}>
          <a href={source} target="_blank" rel="noopener noreferrer">
            Full recipe
          </a>
          <a href={youtube} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              icon={["fab", "youtube"]}
              className={styles.youtube}
            />
          </a>
        </div>
      </section>
    </div>
  );
};

export default CardFront;
