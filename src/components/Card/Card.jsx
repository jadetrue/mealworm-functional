import React, { useState } from "react";
import styles from "./Card.module.scss";
import CardFront from "../CardFront";
import CardBack from "../CardBack";

const Card = (props) => {
  const { recipe } = props;
  const [isFaceDown, setIsFaceDown] = useState(false);

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
