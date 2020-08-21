import React from "react";
import styles from "./App.module.scss";
import Card from "./components/Card";
import NavBar from "./components/NavBar";
import Routes from "./containers/Routes";

import library from "./data/fa-library";
import recipes from "./data/recipes";

const App = () => {
  return (
    <>
      <section className={styles.nav}>
        <NavBar />
      </section>
      <section className={styles.content}>
        <Routes />
      </section>
    </>
  );
};

export default App;
