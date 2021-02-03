import React from "react";
import App from "./App.jsx";
import { mount } from "enzyme";
import Routes from "./containers/Routes/index.js";
import getRecipes from "./services/recipe.service";
import { act } from "@testing-library/react";
import { dummyRecipesState } from "./data/dummy-test-data";

jest.mock("./services/recipe.service", () => jest.fn());

describe("App tests", () => {
  const component = mount(<App />);

  it("Should update App state via a call through the recipe service when a recipe is searched for", async () => {
    getRecipes.mockImplementation(() => dummyRecipesState);

    expect(component.find(Routes).props().recipes.length).toBe(0);

    component.find("span.fa").simulate("click", { bubbles: true });

    await act(async () => {
      await component.find("input[type='text']").simulate("input", { target: { value: "burger" } });
    });
    component.update();

    expect(component.find(Routes).props().recipes.length).toBe(1);
  });
});
