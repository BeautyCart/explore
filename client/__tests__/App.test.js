import React from 'react';
import ReadDOM from 'react-dom';
import { mount, render } from 'enzyme';

import App from '../src/components/App.jsx';

describe('Main App', () => {
  it ('Checks if Carousel component exists', () => {
    const testDiv = mount(<App />);
      expect(testDiv.find('Carousel').exists()).toBe(true);
  }),
  it ('Checks if Modal component exists', () => {
    const testDiv = mount(<App />);
    expect(testDiv.find('Modal').exists()).toBe(true);
  }),
  it ('Checks if Modal is hidden', () => {
    const wrapper = mount(<App />);
    expect(wrapper.state('show')).toBe(false);
  })
})