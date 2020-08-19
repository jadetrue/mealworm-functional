import React from "react";
import styles from "./App.module.scss";
import CardFront from "./components/CardFront";
import CardBack from "./components/CardBack";
import NavBar from "./components/NavBar";

import library from "./data/fa-library";
import recipes from "./data/recipes";

const App = () => {
  const getCardJsx = (recipe) => (
    <React.Fragment key={recipe}>
      <CardFront recipe={recipe} />
      <CardBack recipe={recipe} />
    </React.Fragment>
  );

    return (
      <>
        <section className={styles.nav}>
          <NavBar />
        </section>
        <section className={styles.content}>
          {recipes.map(getCardJsx)}
        </section>
      </>
    );
}
 
export default App;
