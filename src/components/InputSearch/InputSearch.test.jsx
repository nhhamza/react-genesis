import React from 'react';
import { mount } from 'enzyme';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { act } from 'react-dom/test-utils';
import Input from '../Input/Input';
import InputSearch from './InputSearch';
import ROUTES_CONSTANTS from '../../constants/route.constants';

describe('InputSearch component test', () => {
  const history = createMemoryHistory();
  const wrapper = mount(
    <Router history={history}>
      <InputSearch />
    </Router>
  );

  it('should render', () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should redirect on search click', () => {
    const spyHistory = jest.spyOn(history, 'push');
    const testSearch = 'test';
    act(() => {
      wrapper
        .find(Input)
        .first()
        .props()
        .onChange(testSearch);
    });

    wrapper.update();

    act(() => {
      wrapper
        .find('#button-icon-search')
        .first()
        .simulate('click');
    });

    wrapper.update();

    expect(spyHistory).toHaveBeenCalledWith(
      `${ROUTES_CONSTANTS.researchBase}${testSearch}`
    );
  });
});
