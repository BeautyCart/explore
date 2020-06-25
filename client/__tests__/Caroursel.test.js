import React from 'react';
import { shallow } from 'enzyme';


import Carousel from '../src/components/Carousel';

describe('Carousel', () => {
  it('should render correct in debug mode', () => {
    const component = shallow(<Carousel debug />);
    expect(component).toMatchSnapshot();
  });

});

