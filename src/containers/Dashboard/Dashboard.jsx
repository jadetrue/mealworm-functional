import React from "react";
import styles from "./Dashboard.module.scss";
import CardList from "../../components/CardList";
import FeedbackPanel from "../../components/FeedbackPanel";
import { firestore } from "../../firebase";

const DashBoard = (props) => {
  const { recipes, addToCookbook, user } = props;

  const   toggleFav = (recipe) => {
    if (user) {
      recipe.isFav = !recipe.isFav;
      recipe.isFav
        ? addToCookbook(recipe)
        : removeFromCookbook(recipe);
    } else {
      alert(
        "You must be logged in to edit your cookbook. Please click the google icon to sign in with your gmail account."
      );
    }
  }

  const removeFromCookbook = (recipe) => {
    firestore
      .collection("recipes")
      .doc(recipe.id)
      .delete()
      .then(res => console.log(res))
      .catch((err) => console.log(err));
  };

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
