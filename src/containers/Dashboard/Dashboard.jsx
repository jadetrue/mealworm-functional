import React, { useContext } from "react";
import styles from "./Dashboard.module.scss";
import CardList from "../../components/CardList";
import FeedbackPanel from "../../components/FeedbackPanel";
import { RecipeContext } from "../../context/recipeContext";

const DashBoard = () => {
  const recipeContext = useContext(RecipeContext);
  const { recipes } = recipeContext;

  const contentJsx = recipes.length ? (
    <CardList recipes={recipes} />
  ) : (
    <FeedbackPanel
      header="No recipes"
      text="Type into the searchbar to find your desired meal"
    />
  );

  return <section className={styles.dashboard}>{contentJsx}</section>;
};

export default DashBoard;
