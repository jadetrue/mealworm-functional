import React from "react";
import styles from "./CardFront.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardFront = (props) => {
  const {
    strMeal,
    strMealThumb,
    strYoutube,
    strSource,
    strArea,
  } = props.recipe;

  return (
    <div className={styles.cardFront}>
      <img src={strMealThumb} alt="Thai Green Curry" />
      <section className={styles.recipeDetails}>
        <h2>{strMeal}</h2>
        <p>
          <FontAwesomeIcon icon="globe" />
          <span>{strArea}</span>
        </p>
        <div className={styles.links}>
          <a href={strSource} target="_blank" rel="noopener noreferrer">
            Full recipe
          </a>
          <a href={strYoutube} target="_blank" rel="noopener noreferrer">
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
