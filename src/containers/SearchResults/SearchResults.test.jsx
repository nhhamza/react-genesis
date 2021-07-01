import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import SearchResults from './SearchResults';

describe('SearchResults component test', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <SearchResults />
      </BrowserRouter>
    );
  });

  it('it should render', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
