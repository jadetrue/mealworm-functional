import React from "react";
import {CardFront} from "./CardFront";
import {render} from "@testing-library/react";
import {mount} from "enzyme";
import recipeData from "../../data/recipes";
describe("CardFront tests", () => {
    let component;

    beforeEach(() => {
        component = mount(<CardFront />);
    });

    it("should render", () => {
        expect(render(<CardFront />)).toBeTruthy();
    });
});
