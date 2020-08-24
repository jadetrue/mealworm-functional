import React from "react";
import Dashboard from "./Dashboard";
import { shallow } from 'enzyme';
import recipes from '../../data/recipes';

describe("Dashboard tests", () => {
  let component;

  beforeEach(() => {
    component = shallow(<Dashboard recipes={recipes} />);
  })

  it('should render', () => {
    expect(component).toBeTruthy();
  })
});
