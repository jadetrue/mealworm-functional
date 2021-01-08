import React from "react";
import App, { getIngredients } from "./App.jsx";
import { shallow } from 'enzyme';

describe("App tests", () => {
  let component;

  beforeEach(() => {
    component = shallow(<App />);
  })

  it('should render', () => {
    expect(component).toBeTruthy();
  })

});
