import React from "react";
import styles from "./CardList.module.scss";
import Card from "../Card";

const CardList = (props) => {
  const { recipes } = props;
  
  const getCardJsx = (recipe) => (
    <div className={styles.card} key={recipe.id}>
      <Card recipe={recipe} />
    </div>
  );


  return <section className={styles.cards}>{recipes.map(getCardJsx)}</section>;
};

export default CardList;
