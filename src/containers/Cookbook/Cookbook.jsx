import React, { useState, useEffect } from "react";
import styles from "./Cookbook.module.scss";
import recipes from "../../data/recipes";
import FeedbackPanel from "../../components/FeedbackPanel/FeedbackPanel";
import CardList from "../../components/CardList/CardList";

import { firestore } from '../../firebase';

const Cookbook = () => {
  const [favourites, setFavourites] = useState([])

  const removeFavourite = (recipe) => {
    firestore.collection("recipes")
             .doc(recipe.idMeal)
             .delete()
             .then(() => {
                // HINT/TIP: Maybe we could do something here
                //           to get the latest list of recipes????
                //           .............
                getFavourites();
             })
  }

  const getFavourites = () => {
    // 3. needs to get our favourites from firestore.. So we access
    //    our collection called recipes, and we wait for the response
    firestore.collection("recipes").get().then((collectionResponse) => {
      
      // 4. For each document, get the actual DATA, not the crazy metadata stuff
      const documents = collectionResponse.docs.map(document => {
        return document.data();
      });
      
      // 5. Take the documents, and set them to our favourites so 
      //    we can pass them down to CardList
      setFavourites(documents);
    })
  }

  // 1. Let's use useEffect to run something on create
  useEffect(() => {
    // 2. We need to get the favourites to show by default/on-open
    getFavourites();
  }, [])

  const contentJsx = favourites.length ? (
    <CardList recipes={favourites} toggleFav={removeFavourite} />
  ) : (
    <FeedbackPanel
      header="No favourites"
      text="Try returning to dahsboard and searching for your meal of choice"
    />
  );

  return <section className={styles.cookbook}>{contentJsx}</section>;
};

export default Cookbook;
