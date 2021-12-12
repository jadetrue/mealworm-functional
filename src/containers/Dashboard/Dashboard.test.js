import React from "react";
import Dashboard from "./Dashboard";
import {shallow} from "enzyme";
import recipesData from "../../data/recipes";

describe("Not Found Tests", () => {
    let component;

    beforeEach(() => {
        component = shallow(<Dashboard recipes={recipesData} />);
    });

    it("Should render", () => {
        expect(component).toBeTruthy();
    });
});
