import React from "react";
import CardBack from "./CardBack";
import { shallow } from 'enzyme';
import recipes from '../../data/recipes';

describe("CardBack tests", () => {
  let component;

  beforeEach(() => {
    component = shallow(<CardBack recipe={recipes[0]} />);
  })

  it('should render', () => {
    expect(component).toBeTruthy();
  })
});
