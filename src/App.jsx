import React, { useState } from "react";
import styles from "./App.module.scss";
import NavBar from "./components/NavBar";
import Routes from "./containers/Routes";
import { UserProvider } from "./context/userContext";
import { CrudProvider } from "./context/crudContext";
import "./data/fa-library";

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
    const cleanedRecipe = {
      id: recipe.idMeal,
      name: recipe.strMeal,
      category: recipe.strCategory,
      area: recipe.strArea,
      instructions: recipe.strInstructions,
      thumbnail: recipe.strMealThumb,
      tags: recipe.strTags,
      ingredients: getIngredients(recipe),
      source: recipe.strSource,
      dateCreated: new Date().toUTCString(),
      dateModified: null,
      youtube: recipe.strYoutube,
      isFav: false,
    };
    return cleanedRecipe;
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
      <UserProvider>
        <section className={styles.nav}>
          <NavBar
            updateSearchText={grabRecipes}
          />
        </section>
        <section className={styles.content}>
          <CrudProvider>
            <Routes recipes={recipes} />
          </CrudProvider>
        </section>
      </UserProvider>
    </>
  );
};

export default App;
