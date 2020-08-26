# CODE ALONG NOTES

Add private routing to the MealWorm app so a user cannot navigate to the create or cookbook pages either by URL or by NavBar links when not signed in.

## STEPS

- Create a container for PrivateRoutes which renders it's props.children and takes in a user as props
- Add into Routes container and wrap around Cookbook and CreateRecipe components (good point to explain containment in React)
- Pass user state from App.jsx into Routes and then into PrivateRoutes
- In PrivateRoutes add a componentDidMount with the callback triggering a firebaseOnAuthStateChanged and checking for a user
- If there is no user trigger an alert to give feedback and then navigate back to "/"

## Challenge branch

26-authenticated-crud-ca
