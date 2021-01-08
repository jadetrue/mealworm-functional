// ****
// Welcome to the Recipe Service. This code is "concerned" with recipes, and forms our API interaction layer.
// this way any component doesn't need know where/how the recipes are retrieved, only that they are retrieved..
// and this is the file/place for it :)
// ****

const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php";

/**
 * GET - Returns recipes for a given search term.
 *       NOTE: We can leave this untested as it would ONLY test the mealdb API, which is not our responsibility
 * @param {string} searchTerm 
 */
export const getRecipes = (searchTerm) => {
    return fetch(`${API_URL}?s=${searchTerm}`)
                .then((res) => res.json())
                .then((jsonResponse) => {
                    return jsonResponse.meals.map((meal) => mapRecipe(meal));
                })
}

/**
 * Converts API responses into usable objects for our UI
 * NOTE: Let's write unit tests for this to make sure our api responses are in the correct format
 * @param {recipe} recipe 
 */
export const mapRecipe = (recipe) => {
    // 1. Convert all 'ingredientX' properties into an array
    let ingredients = [];
    Object.keys(recipe).forEach((key) => {
        if (key.includes("Ingr") && recipe[key]) {
            ingredients.push(recipe[key]);
        }
    });

    // 2. Return updated/mapped recipe 
    return {
        ...recipe,
        ingredients: ingredients,
        isFav: false,
    };
}
