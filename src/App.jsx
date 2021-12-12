import React, {useState} from "react";
import styles from "./App.module.scss";
import NavBar from "./components/NavBar";
import Routes from "./containers/Routes";

import library from "./data/fa-library";

const App = () => {
    const [recipes, setRecipes] = useState([]);

    const cleanRecipe = (recipe) => {
        let ingredientsArr = [];

        Object.keys(recipe).forEach((key) => {
            if (key.includes("strIngredient") && recipe[key]) {
                ingredientsArr.push(recipe[key]);
            }
        });

        return {
            isFav: false,
            ingredients: ingredientsArr,
            ...recipe,
        };
    };

    const fetchRecipes = (searchTerm) => {
        fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
        )
            .then((res) => res.json())
            .then((jsonResponse) => {
                const meals = jsonResponse.meals;
                const cleanedMeals = meals.map((meal) => {
                    return cleanRecipe(meal);
                });
                setRecipes(cleanedMeals);
            })
            .catch((err) => console.log(err));
    };

    return (
        <>
            <section className={styles.nav}>
                <NavBar updateSearchText={fetchRecipes} />
            </section>
            <section className={styles.content}>
                <Routes recipes={recipes} />
            </section>
            <button onClick={() => fetchRecipes("vegan")}>Click</button>
        </>
    );
};

export default App;
