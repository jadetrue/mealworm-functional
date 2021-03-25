import { firestore } from '../firebase';

const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php";

/**
 * GET - Returns recipes for a given search term.
 *       NOTE: We can leave this untested as it would ONLY test the mealdb API, which is not our responsibility
 * @param {string} searchTerm 
 */
export const searchRecipes = (searchTerm) => {
    return fetch(`${API_URL}?s=${searchTerm}`)
                .then((res) => res.json())
                .then((jsonResponse) => {
                    return jsonResponse.meals.map((meal) => mapRecipe(meal));
                })
}

/**
 * CRUD Operations for recipes
 * @param {*} recipe 
 */
export const getRecipes = () => {
    return firestore.collection('recipes').get();
}

export const deleteRecipe = (recipe) => {
    return firestore.collection('recipes').doc(recipe.id).delete();
}

export const createRecipe = (recipe) => {
    return firestore.collection('recipes').doc(recipe.id).set(recipe);
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
        id: recipe.idMeal,
        name: recipe.strMeal,
        category: recipe.strCategory,
        area: recipe.strArea,
        instructions: recipe.strInstructions,
        thumbnail: recipe.strMealThumb,
        tags: recipe.strTags,
        ingredients: ingredients,
        source: recipe.strSource,
        dateCreated: new Date().toUTCString(),
        dateModified: null,
        youtube: recipe.strYoutube,
        isFav: false
      };
}