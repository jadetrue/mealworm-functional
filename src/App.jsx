import React, { useState } from "react";
import styles from "./App.module.scss";
import NavBar from "./components/NavBar";
import Routes from "./containers/Routes";
import { getRecipes } from './services/recipe.service';

import library from "./data/fa-library";

const App = () => {
  const [recipes, setRecipes] = useState([]);

  const updateRecipes = async (searchTerm) => {
    // 1. Get the latest recipes from the API
    const apiRecipes = await getRecipes(searchTerm);

    // 2. Update the recipes the user is looking at to match the searchTerm
    setRecipes(apiRecipes);
  };

  return (
    <>
      <section className={styles.nav}>
        <NavBar updateSearchText={updateRecipes} />
      </section>
      <section className={styles.content}>
        <Routes recipes={recipes} />
      </section>
    </>
  );
};

export default App;
