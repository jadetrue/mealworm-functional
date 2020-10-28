import React, { useState } from "react";
import styles from "./App.module.scss";
import NavBar from "./components/NavBar";
import Routes from "./containers/Routes";

import library from "./data/fa-library";

const App = () => {
  const [recipes, setRecipes] = useState([]);

  const getIngredients = (recipe) => {
    let ingredients = [];
    Object.keys(recipe).forEach((key) => {
      if (key.includes("Ingr") && recipe[key]) {
        ingredients.push(recipe[key]);
      }
    });
    return ingredients;
  };

  const cleanRecipeData = (recipe) => {

    // 1. Write something here which removes all of the 
    //    unncessary prefixes from the properties
    return {
      idMeal: recipe.idMeal,
      meal: recipe.strMeal,
      drinkAlternative: recipe.strDrinkAlternate,
      category: recipe.strCategory,
      instructions: recipe.strInstructions,
      ingredients: getIngredients(recipe),
      mealThumb: recipe.strMealThumb,
      tags: recipe.strTags,
      youtube: recipe.strYoutube,
      source: recipe.strSource,
      dateModified: recipe.dateModified,
      isFav: false,
    };
  };

  const grabRecipes = (searchTerm) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      .then((res) => res.json())
      .then((res) => {
        const cleanRecipes = res.meals.map(cleanRecipeData);
        setRecipes(cleanRecipes);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <section className={styles.nav}>
        <NavBar updateSearchText={grabRecipes} />
      </section>
      <section className={styles.content}>
        <Routes recipes={recipes} />
      </section>
    </>
  );
};

export default App;
