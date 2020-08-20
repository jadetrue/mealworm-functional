import React, { useState } from "react";
import styles from "./Card.module.scss";
import CardFront from "../CardFront";
import CardBack from "../CardBack";

const Card = (props) => {
  const [isFaceDown, setIsFaceDown] = useState(false);

  const { recipe } = props;
  const flipStyles = isFaceDown ? styles.faceDown : "";

  return (
    <section
      className={`${styles.recipeCard} ${flipStyles}`}
      onClick={() => setIsFaceDown(!isFaceDown)}
    >
      <div className={styles.front}>
        <CardFront recipe={recipe} />
      </div>
      <div className={styles.back}>
        <CardBack recipe={recipe} />
      </div>
    </section>
  );
};

export default Card;
