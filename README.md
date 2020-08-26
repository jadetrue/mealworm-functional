# CODE ALONG NOTES

Edit CRUD functionality in MealWorm so it is user specific rather than all users adding and reading from the same cookbook

## STEPS

- Edit addToCookbook method in Routes.jsx so that:
  - The docId becomes recipe.id + user.uid
  - The saved recipe objct also includes a property of uid with the props.user.uid as the value
- Edit the Dashboard.jsx so that:
  - It takes in a user object as props from Routes.jsx
  - Edit the toggleFav method so if no user is passed in as props the user gets an alert to login else they can perform the CRUD operations as intended
- Edit the Cookbook.jsx so that
  - It takes in the user object as props from Routes.jsx
  - The setCookbookState method filters the querySnapshot before the map to check doc.data(),uid matches the user object uid
  - The removeFromCookbook method uses recipe.id + props.user.uid as the doc id

## Next branch

27-context-ca
