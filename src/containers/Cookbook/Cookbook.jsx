import React, { useState, useEffect } from "react";
import styles from "./Cookbook.module.scss";
import FeedbackPanel from "../../components/FeedbackPanel/FeedbackPanel";
import CardList from "../../components/CardList/CardList";
import { firestore } from "../../firebase";
import { getRecipes, deleteRecipe } from '../../services/recipe.service';

const Cookbook = () => {
  const [favourites, setFavourites] = useState([]);

  const getFavourites = () => {
    getRecipes().then(response => {
      const favourites = response.docs.map(doc => doc.data());
      setFavourites(favourites)
    })
  };

  const removeFav = (recipe) => {
    deleteRecipe(recipe).then(() => getFavourites())
  };

  useEffect(() => {
    getFavourites();
  }, [])

  const contentJsx = favourites.length ? (
    <CardList recipes={favourites} toggleFav={removeFav} />
  ) : (
    <FeedbackPanel
      header="No favourites"
      text="Try returning to dahsboard and searching for your meal of choice"
    />
  );

  return <section className={styles.cookbook}>{contentJsx}</section>;
};

export default Cookbook;
