import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('App component test', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });
  it('should render', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
