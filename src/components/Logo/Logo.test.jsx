import React from 'react';
import { mount } from 'enzyme';
import Logo from './Logo';

describe('Logo component test', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Logo />);
  });

  it('should render', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
