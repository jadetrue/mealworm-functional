import React, { useState, useEffect } from "react";
import styles from "./Cookbook.module.scss";
import FeedbackPanel from "../../components/FeedbackPanel/FeedbackPanel";
import CardList from "../../components/CardList/CardList";
import { firestore } from "../../firebase";

const Cookbook = (props) => {
  const [favourites, setFavourites] = useState([]);
  const { user } = props;

  const fetchCookbook = () => {
    firestore
      .collection("recipes")
      .get()
      .then((querySnapshot) => {
        const favourites = querySnapshot.docs
          .filter((doc) => doc.data().uid === user.uid)
          .map((doc) => doc.data());
          setFavourites(favourites);
      })
      .catch((err) => console.log(err));
  };

  const removeFromFav = (recipe) => {
    firestore
      .collection("recipes")
      .doc(recipe.id + user.uid)
      .delete()
      .then(fetchCookbook)
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchCookbook();
  }, []);

  const contentJsx = favourites.length ? (
    <CardList recipes={favourites} toggleFav={removeFromFav} />
  ) : (
    <FeedbackPanel
      header="No favourites"
      text="Try returning to dahsboard and searching for your meal of choice"
    />
  );

  return <section className={styles.cookbook}>{contentJsx}</section>;
};

export default Cookbook;
