import React, { useState } from "react";
import styles from "./App.module.scss";
import NavBar from "./components/NavBar";
import Routes from "./containers/Routes";

import library from "./data/fa-library";

const App = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <section className={styles.nav}>
        <NavBar updateSearchText={setSearchText} />
      </section>
      <section className={styles.content}>
        <Routes searchText={searchText} />
      </section>
    </>
  );
};

export default App;
