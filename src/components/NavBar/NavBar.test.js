import React from "react";
import NavBar from "./NavBar";
import { shallow } from 'enzyme';

describe("NavBar tests", () => {
  let component;

  beforeEach(() => {
    component = shallow(<NavBar />);
  })

  it('should render', () => {
    expect(component).toBeTruthy();
  })
});
