import React from "react";
import List from "./List";
import { shallow } from 'enzyme';
import recipes from '../../data/recipes';

describe("List tests", () => {
  let component;

  beforeEach(() => {
    component = shallow(<List items={recipes[0].ingredients} />);
  })

  it('should render', () => {
    expect(component).toBeTruthy();
  })
});
