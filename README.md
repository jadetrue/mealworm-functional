# CODE ALONG NOTES

Create a firestore databse and hook into the MealWorm React app so recipes can be read, added or removed from the database (no auth at this point so not user specific)

## STEPS

### 1. Firestore integration

- Add firebase to the dependencies
- Create the src/firebase.js with the correct config

### 2. Clean data ready for Database

- Edit the existing mapRecipe method in recipe.service.js to remove all the "str" prefixes
- Edit CardList, CardBack and CardFront components to use the newly named properties of the recipe objects (strMeal becomes name etc.)

### 3. CRUD Operations - recipe.service.js
- addRecipe() function needs to add a recipe to the recipes collection
- getRecipes() function should get all the favourited recipes to show on the cookbook page
- deleteRecipe() function should remove a recipe from the recipes collection

### 4. Make it work

- Cookbook.jsx on component mount (Remember useEffect?), should call the getRecipes() function to display
- Dashboard.jsx should call addRecipe() or deleteRecipe() based on whether the user has favourited/unfavourited it
- Create addToCookbook method in Dashboard.jsx that adds to the recipes collection and uses recipe id as the doc id

## Challenge branch

22-firestore-ch