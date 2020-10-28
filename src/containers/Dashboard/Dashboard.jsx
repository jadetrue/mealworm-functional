import React from "react";
import styles from "./Dashboard.module.scss";
import CardList from "../../components/CardList";
import FeedbackPanel from "../../components/FeedbackPanel";
import { firestore } from "../../firebase";

const DashBoard = (props) => {
  const { recipes } = props;

  // 1. When the user runs the toggle fav, triggered 
  //    from the child component..
  const toggleFav = (recipe) => {
    // 2. Let's update the recipe isFav property
    recipe.isFav = !recipe.isFav;

    if (recipe.isFav) {
      // 3. add this recipe to our cookbook
      addToFavourite(recipe);
    } else {
      // 4. and when it's false... remove it
      removeFavourite(recipe);
    }
  };

  const addToFavourite = (recipe) => {
    // NOTE: here we are adding a recipe with a RANDOM id!!
    //       change this so it adds the RECIPE ID (not a random one)
    console.log("HERES THE CRAP RECIPE... WHATS THE PROBLEM");
    console.log(recipe);
    firestore.collection("recipes")
            .doc(recipe.idMeal)
            .set(recipe)
            .then(response => {
              console.log('I think we just added a recipe');
              console.log(response);
            })
  }

  const removeFavourite = (recipe) => {
    firestore.collection("recipes")
             .doc(recipe.idMeal)
             .delete()
             .then(() => {
               console.log("we deleted something")
             })
  }

  const contentJsx = recipes.length ? (
    <CardList recipes={recipes} toggleFav={toggleFav} />
  ) : (
    <FeedbackPanel
      header="No recipes"
      text="Type into the searchbar to find your desired meal"
    />
  );

  return <section className={styles.dashboard}>{contentJsx}</section>;
};

export default DashBoard;
