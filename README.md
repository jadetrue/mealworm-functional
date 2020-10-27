# CODE ALONG NOTES

Create a firestore databse and hook into the MealWorm React app so recipes can be read, added or removed from the database (no auth at this point so not user specific)

## STEPS

### Firestore integration


- Add firebase to the dependencies
- Create the src/firebase.js with the correct config

### Clean data ready for Database

- Edit the existing cleanRecipe method in App.jsx to match the model for Recipe in MealWorm-api (https://mealworm-api.web.app/docs/)
- Edit CardList, CardBack and CardFront components to use the newly named properties of the recipe objects (strMeal becomes name etc.)

### Add to database

- Create addToCookbook method in Dashboard.jsx that adds to the recipes collection and uses recipe id as the doc id

### Read from database

- Create setCookbookState method in Cookbook.jsx that gets the recipes collection and once resolved sets the components state for favourites with the returned array of recipe objects
- Call this method in componentDidMount so that the favourites are loaded onto to the page immediately after the component (likely to have to stop here to cover lifecycle methods and implementations)
- Create a removeFromCookbook method in Cookbook.jsx that deletes the desired recipe from the database and, once resolved, calls the setCookbookState method to rerender the Cookbook component

## Challenge branch

22-firestore-ch