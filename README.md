# CODE ALONG NOTES

Add firebase hosting to the MealWorm React app.

## STEPS

- Go to the firebase console and create a new project called 'MealWorm Two'
  - (Do not use the existing MealWorm project as this is to demo the end product to intakes)
- Set up the firebase poject and follow guided steps:
  - Go to the project overview page and click on the web icon
  - Register the app and select to include firebase hosting
  - Skip SDK step
  - Install firebase tools and deploy _see init steps_
- _INIT STEPS_
  - firebase init
  - proceed
  - Select hosting
  - Scroll through to find your project id
  - Write build for the public directory
  - Configure as SPA (y)
- Deploying at this point will show the deafulat firebase project page on the live site
- Run a yarn build and then a firebase deploy to see MealWorm live
- Create a script in the package.json called deploy that runs yarn build and firebase deploy

## Challenge branch

20-hosting-ch
