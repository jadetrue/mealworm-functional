const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php";

export const cleanRecipe = (recipe) => {
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

export const fetchRecipes = (searchTerm) => {
    return fetch(`${API_URL}?s=${searchTerm}`)
        .then((res) => res.json())
        .then((jsonResponse) => {
            const meals = jsonResponse.meals;
            const cleanedMeals = meals.map((meal) => {
                return cleanRecipe(meal);
            });
            return cleanedMeals;
        })
        .catch((err) => console.log(err));
};
