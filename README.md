# CODE ALONG NOTES

Add authentication the MealWorm app so that users can login with their google account and see their own personal cookbook

## STEPS

- Go to your MealWorm project in the firebase console (This should match the project from the hosting and firestore coaching sessions)
- On the authentication panel click setup signin method and enable google sign in and then save
- Follow the docs for configuring web app for google sign in (https://firebase.google.com/docs/auth/web/google-signin)
- Add provider to src/firebase.js
- Add the google icon fontawesome into the fa-library and add it into NavBar.jsx
- Add user state, signIn and signOut methods into App.jsx
- Add getUser method to App.jsx and call inside a componentDidMount
- Pass user state and signIn/signOut methods into NavBar
  - Add the faSignOutAlt icon into the fa-library
  - conditionally render either the google icon or the signOut icon depending on whether a user object is truthy
  - Add signIn method from props onto the google span onClick
  - Add signOut method from props onto the sign out icon span onClick
  - Consitionally add the faStylesDisabled class onto the cookbook and create spans

When completed you should be able to login then see the google icon change to a signOut icon and also see the cookbook and create icons change from grey to the primary font color.

## Challenge branch

authentication-challenge
