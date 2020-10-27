import React, { useState } from "react";
import styles from "./Cookbook.module.scss";
import recipes from "../../data/recipes";
import FeedbackPanel from "../../components/FeedbackPanel/FeedbackPanel";
import CardList from "../../components/CardList/CardList";

import { firestore } from '../../firebase';

const Cookbook = () => {
  const [favourites, setFavourites] = useState(recipes.filter(recipe => recipe.isFav))

  // 1. When toggleFav is run, let's try connect to our database to get our recipes
  const getFavourites = () => {
    // needs to get our favourites from firestore
    firestore.collection("recipes").get().then((response) => {
      console.log('Here is the response....');
      console.log(response);
    })
  }

  const removeFromFav = (recipe) => {
    recipe.isFav = false;
    setFavourites(recipes.filter((recipe) => recipe.isFav));
  };

  const contentJsx = favourites.length ? (
    <CardList recipes={favourites} toggleFav={getFavourites} />
  ) : (
    <FeedbackPanel
      header="No favourites"
      text="Try returning to dahsboard and searching for your meal of choice"
    />
  );

  return <section className={styles.cookbook}>{contentJsx}</section>;
};

export default Cookbook;
