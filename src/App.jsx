import React from "react";
import styles from "./App.module.scss";

import Card from "./components/Card";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound/index";

import recipes from "./data/recipes";

import Dashboard from "./containers/Dashboard/Dashboard";
import Routes from "./containers/Routes/Routes";
// import Cookbook from "./containers/Cookbook/Cookbook";

const App = () => {
    const getCardJsx = (recipe) => (
        <div className={styles.card} key={recipe.idMeal}>
            <Card recipe={recipe} />
        </div>
    );

    return (
        <>
            <section className={styles.nav}>
                <NavBar />
            </section>
            <section className={styles.content}>
                {recipes.map(getCardJsx)}
            </section>
            {/* <Cookbook /> */}
            <NotFound />
            <Dashboard />
            <Routes />
        </>
    );
};

export default App;
