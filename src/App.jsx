import React from "react";
import styles from "./App.module.scss";

import NavBar from "./components/NavBar";

import Routes from "./containers/Routes/Routes";

const App = () => {
    return (
        <>
            <section className={styles.nav}>
                <NavBar />
            </section>
            <section className={styles.content}>
                <Routes />
            </section>
            <Routes />
        </>
    );
};

export default App;
