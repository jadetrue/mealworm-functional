import React from "react";
import Cookbook from "./Cookbook";
import { shallow } from 'enzyme';

describe("Cookbook tests", () => {
  let component;

  beforeEach(() => {
    component = shallow(<Cookbook />);
  })

  it('should render', () => {
    expect(component).toBeTruthy();
  })
});
