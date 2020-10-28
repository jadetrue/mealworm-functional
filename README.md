# CODE ALONG NOTES

Create a firestore databse and hook into the MealWorm React app so recipes can be read, added or removed from the database (no auth at this point so not user specific)

## STEPS


### Clean data ready for Database

- Edit the existing cleanRecipe method in App.jsx to match the model for Recipe in MealWorm-api (https://mealworm-api.web.app/docs/)
- Edit CardList, CardBack and CardFront components to use the newly named properties of the recipe objects (strMeal becomes name etc.)



## Challenge branch

22-firestore-ch