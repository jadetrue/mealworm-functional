import React, {useState} from "react";
import styles from "./App.module.scss";
import NavBar from "./components/NavBar";
import Routes from "./containers/Routes";
import {fetchRecipes} from "./services/recipe.service";
import library from "./data/fa-library";

const App = () => {
    const [recipes, setRecipes] = useState([]);

    const updateRecipes = async (searchTerm) => {
        const apiRecipes = await fetchRecipes(searchTerm);
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
