import React from "react";
import styles from "./Dashboard.module.scss";
import Card from "../../components/Card";
import recipes from "../../data/recipes";

const DashBoard = () => {
  const getCardJsx = (recipe) => (
    <div className={styles.card} key={recipe.idMeal}>
      <Card recipe={recipe} />
    </div>
  );

  return <section className={styles.cards}>{recipes.map(getCardJsx)}</section>;
};

export default DashBoard;
