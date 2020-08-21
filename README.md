# CODE ALONG NOTES

Show functions being passed down as props. Implement the logic to search through the data file for a matching recipe and to add recipes from the dashboard into your favourites/cookbook

## STEPS

### New components

- Create a reusable CardList component that takes in recipes as props and maps to Card components (to be used in both Dashboard and Cookbook)
- Create a reusable feedback panel component from the panel in the NotFound component (To be used in NotFound, Dashboard and Cookbook)

### Adding to favourites

- Set the Cookbook up to filter recipes in the data file based on the isFav property (set to false for all to begin with)
- The Cookbook should show the feedback panel if no recipes are favourited and the relevant recipes if they are
- Create a method in the Dashboard container (toggleFav) that takes in a recipe and toggles the isFav property to the opposite of what it currently is
- Pass this method down through CardList, Card and finally into CardBack where you can call it from the existing toggleFav method there

### Search functionality

- Add state & setState logic into App.jsx for searchText
- Pass the setState method (updateSearchText) from App into NavBar and then into SearchBar so when the user types into the input field it updates the state in App.jsx (check react devtools)
- Pass the searchText down into Routes, then Dashboard and use to filter the recipes in recipes.js
- If there are no matches show the feedback panel else show the matching recipes

## Challenge branch

14-funcs-as-props-ch
