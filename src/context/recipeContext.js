import React, { createContext, useState } from "react";

export const RecipeContext = createContext({});

export const RecipeProvider = (props) => {
  const [recipes, setRecipes] = useState([]);

  const cleanRecipe = (recipe) => {
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
    };
    return cleanedRecipe;
  };

  const getIngredients = (recipe) => {
    let ingredients = [];
    Object.keys(recipe).forEach((key) => {
      if (key.includes("Ingr") && recipe[key]) {
        ingredients.push(recipe[key]);
      }
    });
    return ingredients;
  };

  const grabRecipes = (searchTerm) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      .then((res) => res.json())
      .then((res) => {
        const cleanRecipes = res.meals.map(cleanRecipe);
        setRecipes(cleanRecipes);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <RecipeContext.Provider value={{ recipes, grabRecipes }}>
      {props.children}
    </RecipeContext.Provider>
  );
};
