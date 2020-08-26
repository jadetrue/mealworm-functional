import React, { createContext, useState, useContext, useEffect } from "react";
import { firestore } from "../firebase";
import { UserContext } from "./userContext";

export const CrudContext = createContext({});

export const CrudProvider = (props) => {
  const [favourites, setFavourites] = useState([]);
  const userContext = useContext(UserContext);

  const fetchCookbook = () => {
    if (userContext.user) {
      firestore
        .collection("recipes")
        .get()
        .then((querySnapshot) => {
          const favourites = querySnapshot.docs
            .filter((doc) => doc.data().uid === userContext.user.uid)
            .map((doc) => doc.data());
          setFavourites(favourites);
        })
        .catch((err) => console.log(err));
    }
  };

  const addToCookbook = (recipe) => {
    firestore
      .collection("recipes")
      .doc()
      .set({ ...recipe, uid: userContext.user.uid })
      .then(fetchCookbook)
      .catch((err) => console.log(err));
  };

  const removeFromCookbook = (recipe) => {
    const query = firestore
      .collection("recipes")
      .where("id", "==", recipe.id)
      .where("uid", "==", userContext.user.uid);

    query.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => doc.ref.delete());
      fetchCookbook();
    });
  };

  const toggleFav = (recipe) => {
    if (userContext.user) {
      recipe.isFav = !recipe.isFav;
      recipe.isFav ? addToCookbook(recipe) : removeFromCookbook(recipe);
    } else {
      alert(
        "You must be logged in to edit your cookbook. Please click the google icon to sign in with your gmail account."
      );
    }
  };

  useEffect(() => {
    fetchCookbook();
  }, []);

  return (
    <CrudContext.Provider value={{ favourites, toggleFav, addToCookbook }}>
      {props.children}
    </CrudContext.Provider>
  );
};
