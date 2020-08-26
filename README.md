# CODE ALONG NOTES

Add context into MealWorm and move all logic realted to authentication and crud into their own respective context files then consume in the relevant components

## STEPS

- Create a src/context directory with userContext.js and crudContext.js inside

### User Context

- In userContext.js create context and UserProvider class.
- Move all methods related to auth from App.jsx into userContext.js UserProvider class, remove user from App state and anywhere it is passed into children
- In the UserProvider state add the user, signIn and signOut methods, then pass this as the value for the rendered UserProvider element
- Wrap the UserProvider round the content in App.jsx render method
- Add contextType property to NavBar, Cookbook and Dashboard
- Replace any reference to signIn/Out methods or user object from props with this.context. ...

### CRUD context

- In crudContext.js create context and CrudProvider class
- Move all addToCookbook, removeFromCookbook, toggleFav, and setCookbookState methods into crudProvider
- Add togggleFav and addToCookbook and a property for favourites into the CrudProvider and pass these in as the value to the rendered CrudProvider element
- Wrap the Provider element around the Routes element in App.jsx
- Remove all traces of the above methods or favourites being passed from Dashboard/Cookbook down
- Add contextType to CreateRecipe so it can access the addToCookbook recipe
- Add contextType to CardBack component and edit the toggleFav function so it calls toggleFav in CrudContext
- Add contextType to Cookbook and edit so it has no state or componentDidMount but just renders the favourites from context.

## Challenge branch

28-context-ch
