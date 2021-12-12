import React from "react";
import NotFound from "./NotFound";
import {shallow} from "enzyme";

describe("Not Found Tests", () => {
    let component;

    beforeEach(() => {
        component = shallow(<NotFound />);
    });

    it("Should render", () => {
        expect(component).toBeTruthy();
    });
});
