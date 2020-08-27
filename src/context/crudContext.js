import React, { createContext, useState, useContext, useEffect } from "react";
import { firestore } from "../firebase";
import { UserContext } from "./userContext";

export const CrudContext = createContext({});

export const CrudProvider = (props) => {
  const [favourites, setFavourites] = useState([]);
  const userContext = useContext(UserContext);

  const url = "https://mealworm-api.web.app/api";

  const fetchCookbook = () => {
    if (userContext.user) {
      fetch(`${url}/favourites/${userContext.user.uid}`)
        .then((response) => response.json())
        .then(({ recipes }) => {
          const favourites = recipes.map((recipe) => ({
            ...recipe,
            isFav: true,
          }));
          setFavourites(favourites);
        });
    }
  };

  const addToCookbook = (recipe) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...recipe,
        userId: userContext.user.uid,
      }),
    };

    fetch(`${url}/recipes`, requestOptions)
      .then((response) => {
        return response.json();
      })
      .then(fetchCookbook);
  };

  const removeFromCookbook = (recipe) => {
    const requestOptions = {
      method: "DELETE",
    };

    fetch(`${url}/recipes/${recipe.id}`, requestOptions)
      .then((response) => response.json())
      .then(fetchCookbook);
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
    <CrudContext.Provider
      value={{ favourites, toggleFav, addToCookbook }}
    >
      {props.children}
    </CrudContext.Provider>
  );
};
