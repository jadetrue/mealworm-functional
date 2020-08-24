import React from "react";
import NotFound from "./NotFound";
import { shallow } from 'enzyme';

describe("NotFound tests", () => {
  let component;

  beforeEach(() => {
    component = shallow(<NotFound />);
  })

  it('should render', () => {
    expect(component).toBeTruthy();
  })
});
