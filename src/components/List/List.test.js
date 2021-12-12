import React from "react";
import List from "./List";
import {shallow} from "enzyme";
import recipeData from "../../data/recipes";

describe("Not Found Tests", () => {
    let component;

    beforeEach(() => {
        const ingredients = recipeData[0].ingredients;
        component = shallow(<List items={ingredients} />);
    });

    it("Should render", () => {
        expect(component).toBeTruthy();
    });
});
