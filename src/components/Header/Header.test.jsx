import React from 'react';
import { mount } from 'enzyme';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { act } from 'react-dom/test-utils';
import Header from './Header';

describe('Header component test', () => {
  const history = createMemoryHistory();
  const wrapper = mount(
    <Router history={history}>
      <Header />
    </Router>
  );

  it('should render', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should show search toolbar on search icon button click', () => {
    act(() => {
      wrapper
        .find('#icon-search-button')
        .first()
        .simulate('click');
    });

    wrapper.update();

    expect(wrapper.find('#search-toolbar').exists()).toBeTruthy();
  });
});
