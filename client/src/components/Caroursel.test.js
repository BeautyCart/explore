import React from 'react';
import { shallow, mount } from 'enzyme';


import Carousel from './Carousel';

describe('Carousel', () => {
  it('should render correct in debug mode', () => {
    const component = shallow(<Carousel debug />);
    expect(component).toMatchSnapshot();
  });

});

