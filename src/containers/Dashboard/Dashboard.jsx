import React from "react";
import styles from "./Dashboard.module.scss";
import CardList from "../../components/CardList";
import FeedbackPanel from "../../components/FeedbackPanel";
import { firestore } from "../../firebase";

const DashBoard = (props) => {
  const { recipes } = props;

  const toggleFav = (recipe) => {
    recipe.isFav = !recipe.isFav;
    recipe.isFav ? addToCookbook(recipe) : removeFromCookbook(recipe);
  };

  const addToCookbook = (recipe) => {
    firestore
      .collection("recipes")
      .doc(recipe.id)
      .set(recipe)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const removeFromCookbook = (recipe) => {
    firestore
      .collection("recipes")
      .doc(recipe.id)
      .delete()
      .then(this.setCookbookState)
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
