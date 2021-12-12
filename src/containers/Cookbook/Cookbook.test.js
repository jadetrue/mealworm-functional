import React from "react";
import Cookbook from "./Cookbook";
import {shallow} from "enzyme";

describe("Not Found Tests", () => {
    let component;

    beforeEach(() => {
        component = shallow(<Cookbook />);
    });

    it("Should render", () => {
        expect(component).toBeTruthy();
    });
});
