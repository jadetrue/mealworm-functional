import React, { Component } from "react";
import styles from "./App.module.scss";
import CardFront from "./components/CardFront";
import CardBack from "./components/CardBack";
import NavBar from "./components/NavBar";

import recipes from "./data/recipes";

const App = () => {
  return ( <>
    <section className={styles.nav}>
      <NavBar />
    </section>
    <section className={styles.content}>
      <CardFront recipe={recipes[1]} />
      <CardBack />
    </section>
  </>  );
}
 
export default App;
