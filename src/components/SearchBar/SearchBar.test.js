import React from "react";
import SearchBar from "./SearchBar";
import { shallow } from 'enzyme';

describe("SearchBar tests", () => {
  let component;
  let mockFn;
  let testPlaceholder = "Test placeholder";

  beforeEach(() => {
    mockFn = jest.fn();
    component = shallow(<SearchBar placeholder={testPlaceholder} updateSearchText={mockFn} />);
  })

  it('should render', () => {
    expect(component).toBeTruthy();
  })

  it('should render the correct placeholder', () => {
    component.find('span.fa').simulate('click');
    expect(component.find('input').prop('placeholder')).toBe(testPlaceholder);
  })

  it('should call the parent function on input', () => {
    component.find('span.fa').simulate('click');
    component.find('input').simulate('input', { target: { value: 'User input' } })
    expect(mockFn).toHaveBeenCalled();
  })

  it('should call the parent function with user input', () => {
    component.find('span.fa').simulate('click');
    component.find('input').simulate('input', { target: { value: 'User input' } })
    expect(mockFn).toHaveBeenCalledWith('User input');
  })
});
