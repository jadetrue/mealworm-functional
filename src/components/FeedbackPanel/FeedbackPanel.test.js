import React from "react";
import FeedbackPanel from "./FeedbackPanel";
import { shallow } from 'enzyme';

describe("FeedbackPanel tests", () => {
  let component;

  beforeEach(() => {
    component = shallow(<FeedbackPanel />);
  })

  it('should render', () => {
    expect(component).toBeTruthy();
  })
});
