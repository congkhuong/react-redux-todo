import React from 'react';
import { shallow } from 'enzyme';
import Element from '../Element';

describe('<Element /> component', () => {
  it('renders without problems', () => {
    const props = {
      id: 1,
      name: 'Element',
      price: 110,
      handleClick: jest.fn(),
    };
    const wrapper = shallow(<Element {...props} />);

    expect(wrapper).toHaveLength(1);
  });

  it('renders with handleClick', () => {
    const props = {
      id: 1,
      name: 'Element',
      price: 110,
      handleClick: jest.fn(),
    };
    const wrapper = shallow(<Element {...props} />);

    expect(wrapper.hasClass('active')).toEqual(false);
    wrapper.simulate('click');
    expect(wrapper.hasClass('active')).toEqual(true);
  });
});
