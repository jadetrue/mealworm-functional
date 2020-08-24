import React from "react";
import styles from "./Dashboard.module.scss";
import recipes from "../../data/recipes";
import CardList from '../../components/CardList';
import FeedbackPanel from '../../components/FeedbackPanel';

const DashBoard = (props) => {

  const checkRecipeName = (recipe) => {
    const recipeName = recipe.strMeal.toLowerCase();
    return recipeName.includes(props.searchText.toLowerCase());
  };

  const toggleFav = (recipe) => {
    recipe.isFav = !recipe.isFav;
  };

  const matchingRecipes = recipes.filter(checkRecipeName);

  const contentJsx = matchingRecipes.length ? (
    <CardList recipes={matchingRecipes} toggleFav={toggleFav} />
  ) : (
    <FeedbackPanel
      header="No matches"
      text="None of our recipes matched that search"
    />
  );
  
  return <section className={styles.dashboard}>{contentJsx}</section>
};

export default DashBoard;
