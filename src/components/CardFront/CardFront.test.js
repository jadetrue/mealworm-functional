import React from "react";
import CardFront from "./CardFront";
import { mount } from "enzyme";
import recipes from '../../data/recipes';

describe("CardFront tests", () => {
  let component;
  let testRecipe;

  beforeEach(() => {
    testRecipe = recipes[0];
    component = mount(<CardFront recipe={testRecipe} />);
  });

  it("should render", () => {
    expect(component).toBeTruthy();
  });

  it('should render the correct name based on the recipe passed in as props', () => {
    const mealTitle = testRecipe.strMeal;
    expect(component.text()).toContain(mealTitle);
  })

  it("should render recipe meal thumb on page", () => {
    expect(component.find('img').prop('src')).toBe(testRecipe.strMealThumb);
  });

  it("should render correct recipe source href", () => {
    expect(component.find('a').at(0).prop('href')).toBe(testRecipe.strSource);
  });

  it("should render correct youtube href", () => {
    expect(component.find('a').at(1).prop('href')).toBe(testRecipe.strYoutube);
  });
});
