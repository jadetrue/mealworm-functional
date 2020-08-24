# CODE ALONG NOTES

Demonstrate unit testing with Jest and Enzyme in a variety of places around the MealWorm app so the trainees can see a number of different tests & testing functions.

## STEPS

- Add Enzyme packages into dev dependencies (https://enzymejs.github.io/enzyme/)
- Add Enzyme adapter config to setupTests.js
- Test that each component renders (Some will fail this test if you do not pass them the correct props e.g. Dashboard, List, any Card component etc.)
- Test CardFront renders information from props as expected (img has correct src and name etc is rendered on page)
- Test the Card Flip (State change and conditional styling)
- Test the CardList renders the correct number of card components
- Test the SearchBar is reusable and works as intended (calls mocked parent function with outputed string)

## Challenge branch

18-unit-testing-ch
