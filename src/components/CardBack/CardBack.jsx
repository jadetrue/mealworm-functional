import React from "react";
import styles from "./CardBack.module.scss";

const CardBack = () => {
  return (
    <section className={styles.cardBack}>
      <h2>Thai Green Curry</h2>
      <h3>Instructions</h3>
      <p>
        Put the potatoes in a pan of boiling water and cook for 5 minutes. Throw
        in the beans and cook for a further 3 minutes, by which time both should
        be just tender but not too soft. Drain and put to one...
      </p>
      <h3>Ingredients</h3>
    </section>
  );
};

export default CardBack;
