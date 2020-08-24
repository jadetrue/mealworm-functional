import React from "react";
import FeedbackPanel from "./FeedbackPanel";
import { shallow } from 'enzyme';

describe("FeedbackPanel tests", () => {
  let component;

  beforeEach(() => {
    component = shallow(<FeedbackPanel header="Test header" text="Test text" />);
  })

  it('should render', () => {
    expect(component).toBeTruthy();
  })

  it('should render the header passed in as props', () => {
    expect(component.text()).toContain('Test header');
  })

  it('should render the text passed in as props', () => {
    expect(component.text()).toContain('Test text');
  })
});
