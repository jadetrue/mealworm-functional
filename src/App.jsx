import React, { useState } from "react";
import styles from "./App.module.scss";
import NavBar from "./components/NavBar";
import Routes from "./containers/Routes";
import { UserProvider } from "./context/userContext";
import { RecipeProvider } from "./context/recipeContext";
import { CrudProvider } from "./context/crudContext";
import "./data/fa-library";

const App = () => {
  return (
    <UserProvider>
      <RecipeProvider>
        <section className={styles.nav}>
          <NavBar/>
        </section>
        <section className={styles.content}>
          <CrudProvider>
            <Routes />
          </CrudProvider>
        </section>
      </RecipeProvider>
    </UserProvider>
  );
};

export default App;
